import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import L from 'leaflet';
import { useTheme } from '../contexts/themeContext';

// No need to fix default markers since we're using custom divIcons only

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  type: 'property' | 'service' | 'nearby';
  icon?: any;
  color?: string;
  number?: number;
  label?: string;
  onClick?: () => void;
}

interface InteractiveMapProps {
  center: { lat: number; lng: number };
  markers: MapMarker[];
  zoom?: number;
}

// Helper function to convert React component to HTML string
const componentToHtml = (Component: any, className: string): string => {
  const container = document.createElement('div');
  container.style.display = 'none';
  document.body.appendChild(container);
  
  const root = createRoot(container);
  root.render(<Component className={className} />);
  
  // Give it a tick to render
  const html = container.innerHTML;
  
  // Cleanup
  root.unmount();
  document.body.removeChild(container);
  
  return html;
};

export function InteractiveMap({ center, markers, zoom = 16 }: Readonly<InteractiveMapProps>) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markersLayer = useRef<L.LayerGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const { theme } = useTheme();

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    // Create map
    leafletMap.current = L.map(mapRef.current, {
      center: [center.lat, center.lng],
      zoom: zoom,
      zoomControl: false,
      attributionControl: false,
      minZoom: 11,
      maxZoom: 18,
    });

    // Add initial tile layer (will be updated by theme effect)
    const tileUrl = theme === 'dark' 
      ? 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      : 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
    
    tileLayerRef.current = L.tileLayer(tileUrl, {
      attribution: '',
      maxZoom: 18,
      minZoom: 11,
    }).addTo(leafletMap.current);

    // Create markers layer
    markersLayer.current = L.layerGroup().addTo(leafletMap.current);

    // Add custom zoom control
    L.control.zoom({
      position: 'bottomright'
    }).addTo(leafletMap.current);

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  // Update tile layer when theme changes
  useEffect(() => {
    if (!leafletMap.current || !tileLayerRef.current) return;

    // Remove old tile layer
    tileLayerRef.current.remove();

    // Add new tile layer based on theme
    const tileUrl = theme === 'dark' 
      ? 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      : 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
    
    tileLayerRef.current = L.tileLayer(tileUrl, {
      attribution: '',
      maxZoom: 18,
      minZoom: 11,
    }).addTo(leafletMap.current);
  }, [theme]);

  // Update map center when prop changes
  useEffect(() => {
    if (leafletMap.current) {
      leafletMap.current.setView([center.lat, center.lng], zoom);
    }
  }, [center.lat, center.lng, zoom]);

  // Update markers when they change
  useEffect(() => {
    if (!leafletMap.current || !markersLayer.current) return;

    // Clear existing markers
    markersLayer.current.clearLayers();

    // Add new markers
    for (const marker of markers) {
      if (!markersLayer.current) continue;

      let leafletMarker: L.Marker;

      if (marker.type === 'property') {
        // Property marker - blue house icon with white background circle
        const IconComponent = marker.icon;
        
        const propertyIcon = L.divIcon({
          html: `
            <div class="relative flex items-center justify-center">
              <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-4 border-blue-600 text-blue-600">
                <div class="w-5 h-5 flex items-center justify-center icon-container"></div>
              </div>
              ${marker.label ? `
                <div class="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-md text-xs">
                  ${marker.label}
                </div>
              ` : ''}
            </div>
          `,
          className: 'custom-div-icon',
          iconSize: [48, 48],
          iconAnchor: [24, 48],
        });
        leafletMarker = L.marker([marker.lat, marker.lng], { icon: propertyIcon });
        
        // Render the icon after marker is added
        if (IconComponent) {
          setTimeout(() => {
            const iconContainer = leafletMarker.getElement()?.querySelector('.icon-container');
            if (iconContainer) {
              const root = createRoot(iconContainer as HTMLElement);
              root.render(<IconComponent className="w-5 h-5" />);
            }
          }, 0);
        }
      } else if (marker.type === 'service') {
        // Service marker - colored icons matching PropertyView style
        const IconComponent = marker.icon;
        const colorClass = marker.color || 'text-gray-600 border-gray-600';
        
        // Extract just the text color and border color classes
        const textColorClass = colorClass.split(' ').find(c => c.startsWith('text-')) || 'text-gray-600';
        const borderColorClass = colorClass.split(' ').find(c => c.startsWith('border-')) || 'border-gray-600';
        
        const serviceIcon = L.divIcon({
          html: `
            <div class="relative flex items-center justify-center">
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md border-2 ${borderColorClass} ${textColorClass} hover:scale-110 transition-transform cursor-pointer">
                <div class="w-4 h-4 flex items-center justify-center icon-container"></div>
              </div>
            </div>
          `,
          className: 'custom-div-icon',
          iconSize: [40, 40],
          iconAnchor: [20, 20],
        });
        leafletMarker = L.marker([marker.lat, marker.lng], { icon: serviceIcon });
        
        // Render the icon after marker is added
        if (IconComponent) {
          setTimeout(() => {
            const iconContainer = leafletMarker.getElement()?.querySelector('.icon-container');
            if (iconContainer) {
              const root = createRoot(iconContainer as HTMLElement);
              root.render(<IconComponent className="w-4 h-4" />);
            }
          }, 0);
        }
      } else {
        // Nearby marker - green numbered
        const nearbyIcon = L.divIcon({
          html: `
            <div class="relative">
              <div class="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
                <span class="text-sm">${marker.number || ''}</span>
              </div>
            </div>
          `,
          className: 'custom-div-icon',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        });
        leafletMarker = L.marker([marker.lat, marker.lng], { icon: nearbyIcon });
        
        if (marker.onClick) {
          leafletMarker.on('click', marker.onClick);
        }
      }

      leafletMarker.addTo(markersLayer.current);
    }
  }, [markers]);

  return (
    <div className="relative w-full h-full">
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ background: '#f9fafb' }}
      />
      
      {/* Custom zoom level indicator */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md text-xs pointer-events-none">
        Zoom: {zoom}
      </div>
    </div>
  );
}