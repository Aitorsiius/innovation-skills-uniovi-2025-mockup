## 📋 Contexto del Proyecto

Este proyecto fue desarrollado como parte del programa Innovation Skills de la Universidad de Oviedo 2025. Se trató de un trabajo con un equipo multidisciplinar conformado por **10 personas**, de las cuales **David y yo fuimos los únicos técnicos informáticos**. El mockup fue presentado ante un jurado especializado y CEOs de empresas de Asturias el día **4 de diciembre de 2025**.

## 🏠 Descripción del Proyecto

**Mockup de Búsqueda de Propiedades** es una aplicación web interactiva diseñada para facilitar la búsqueda y evaluación de propiedades inmobiliarias, incorporando información sobre seguridad y tasas de criminalidad por zonas, servicios cercanos, y cálculo de rentabilidades en el caso de alquilar la propiedad.

## ✨ Características Principales

### Para Usuarios Generales
- **Búsqueda de Propiedades**: Sistema de búsqueda por URL de Idealista de propiedades inmobiliarias
- **Vista Detallada**: Información completa de cada propiedad con el precio de compra, rentabilidad anual para alquiler, y servicios cercanos
- **Mapa Interactivo**: Visualización geográfica de propiedades y servicios cercanos usando Leaflet
- **Indicador de Seguridad**: Tasas de criminalidad por zonas para evaluación de seguridad
- **Historial Reciente**: Registro de las últimas 3 propiedades visualizadas

### Panel de Administración
- **Sistema de Login**: Autenticación segura para administradores
- **Gestión de Zonas**: Actualización de tasas de criminalidad por zona

### Experiencia de Usuario
- **Internacionalización**: Soporte multiidioma
- **Temas**: Modo claro y oscuro
- **Diseño Responsivo**: Optimizado para diferentes dispositivos

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18.3.1**: Librería principal para la interfaz de usuario
- **TypeScript**: Para tipado estático y mayor seguridad en el código
- **Vite 6.3.5**: Herramienta de construcción y desarrollo rápido

### UI/UX
- **Radix UI**: Componentes de interfaz accesibles y personalizables
- **Tailwind CSS**: Framework de utilidades CSS
- **Lucide React**: Iconos vectoriales
- **Leaflet**: Librería para mapas interactivos

### Herramientas Adicionales
- **React Hook Form**: Gestión de formularios
- **Recharts**: Visualización de datos
- **Embla Carousel**: Carruseles de imágenes
- **Sonner**: Sistema de notificaciones

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 20 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Aitorsiius/innovation-skills-uniovi-2025-mockup.git

# Entrar al directorio
cd innovation-skills-uniovi-2025-mockup

# Instalar dependencias
npm install
```

### Ejecución

```bash
# Modo desarrollo
npm run dev

# Construir para producción
npm run build
```


## 🎯 Vistas Principales

El proyecto consta de 5 vistas principales:

1. **Search View**: Vista de búsqueda inicial
2. **Property View**: Vista detallada de una propiedad específica
3. **Login View**: Vista de autenticación para administradores
4. **Admin View**: Panel de administración
5. **Error View**: Vista de error cuando una propiedad no se encuentra

## 👥 Equipo

Este proyecto fue desarrollado por un equipo multidisciplinar de 10 personas, combinando perfiles técnicos y de negocio para crear una solución integral.

## 📄 Licencia

Este proyecto es privado y fue desarrollado con fines educativos para el programa Innovation Skills de la Universidad de Oviedo.

---

## Notes

Este README está basado en el análisis del código del repositorio. El proyecto es un mockup completo de una aplicación de búsqueda de propiedades inmobiliarias que incluye:

- Un sistema de búsqueda y visualización de propiedades
- Integración con mapas interactivos usando Leaflet
- Un sistema de administración con autenticación
- Gestión de tasas de criminalidad por zonas para evaluación de seguridad
- Soporte para internacionalización y temas personalizables
- Una arquitectura moderna con React, TypeScript y Vite

El proyecto demuestra buenas prácticas de desarrollo web moderno con una separación clara de responsabilidades entre componentes, contextos y datos, lo cual facilitó el trabajo.
