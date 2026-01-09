# AuraDesign Template - Premium Architecture & Design Website
# AuraDesign 模板 - 高级建筑与设计网站
# AuraDesign Template - Sitio Web Premium de Arquitectura y Diseño

![AuraDesign](https://img.shields.io/badge/AuraDesign-Premium%20Template-orange?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css)

Un template premium para sitios web de arquitectura y diseño interior construido con las últimas tecnologías web. Perfecto para estudios de arquitectura, diseñadores de interiores y profesionales del sector.

A premium template for architecture and interior design websites built with the latest web technologies. Perfect for architecture studios, interior designers, and industry professionals.

专为建筑和室内设计网站打造的高级模板，采用最新网络技术构建。完美适用于建筑工作室、室内设计师和行业专业人士。

## Características Premium / Premium Features / 高级功能

### Diseño y UX / Design & UX / 设计与用户体验
- **Diseño Premium**: Interfaz elegante con gradientes sofisticados y efectos visuales avanzados
- **Modo Oscuro**: Tema oscuro/claro con persistencia automática
- **Responsive Design**: Completamente adaptable a todos los dispositivos
- **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- **Accesibilidad**: Cumple con estándares WCAG 2.1

### Tecnología Avanzada / Advanced Technology / 先进技术
- **React 18**: Con las últimas características y optimizaciones
- **TypeScript**: Tipado estático para código robusto y mantenible
- **Tailwind CSS**: Framework utility-first con configuración personalizada
- **shadcn/ui**: Componentes de UI reutilizables y accesibles
- **Vite**: Herramienta de construcción ultra-rápida
- **Framer Motion**: Animaciones profesionales y fluidas

### Funcionalidades / Features / 功能特性
- **Formularios Funcionales**: Integración con Web3Forms (gratuito) o Formspree
- **SEO Optimizado**: Meta tags, sitemap, robots.txt, structured data
- **PWA Ready**: Manifest, service workers, instalación offline
- **Performance**: Lazy loading, code splitting, optimización de imágenes
- **Analytics Ready**: Integración preparada para Google Analytics
- **Lazy Loading**: Carga optimizada de imágenes y componentes

## Páginas Incluidas / Included Pages / 包含页面

### Home / 首页
- Hero section impactante con estadísticas animadas
- Navegación fluida y responsive
- Call-to-actions estratégicamente ubicados

### About / 关于我们
- Historia de la empresa con timeline visual
- Equipo con fotos y biografías
- Valores corporativos con iconografía

### Services / 服务
- 6 servicios principales con descripciones detalladas
- Proceso de trabajo en 4 fases
- Filtros interactivos por categoría

### Portfolio / 作品集
- Galería de proyectos con filtros dinámicos
- Modal de vista detallada de proyectos
- Categorización por tipo de proyecto

### Contact / 联系我们
- Formulario funcional con validación
- Información de contacto completa
- Integración con mapas (placeholder)

### 404 / 错误页面
- Página de error personalizada
- Navegación de regreso intuitiva

## Tecnologías / Technologies / 技术栈

### Frontend / 前端
- **React 18.2.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.2.2** - Tipado estático para JavaScript
- **Tailwind CSS 3.3.6** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI reutilizables
- **Framer Motion** - Animaciones avanzadas

### Herramientas de Desarrollo / Development Tools / 开发工具
- **Vite 5.0.8** - Herramienta de construcción rápida
- **React Router 6.20.1** - Enrutamiento de la aplicación
- **Lucide React** - Iconos modernos y consistentes
- **React Helmet Async** - Gestión de meta tags

### Utilidades / Utilities / 实用工具
- **React Query** - Gestión de estado del servidor
- **Sonner** - Notificaciones elegantes
- **Class Variance Authority** - Variantes de componentes
- **Tailwind Merge** - Combinación inteligente de clases

## Instalación / Installation / 安装

### Requisitos Previos / Prerequisites / 前置要求
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación / Installation Steps / 安装步骤

1. **Clona el repositorio / Clone the repository / 克隆仓库**
   ```bash
   git clone <repository-url>
   cd auradesign-template
   ```

2. **Instala las dependencias / Install dependencies / 安装依赖**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno / Configure environment variables / 配置环境变量**
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus configuraciones:
   ```env
   VITE_WEB3FORMS_KEY=your_web3forms_key
   VITE_GA_ID=your_google_analytics_id
   VITE_SITE_URL=https://yourdomain.com
   ```

4. **Inicia el servidor de desarrollo / Start development server / 启动开发服务器**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador / Open your browser / 打开浏览器**
   Navega a `http://localhost:5173`

## Configuración Rápida / Quick Setup / 快速设置

### Para Configurar en 5 Minutos / Setup in 5 Minutes / 5分钟设置
1. **Formulario**: Obtén tu access key en [Web3Forms](https://web3forms.com/)
2. **Imágenes**: Descarga imágenes de [Unsplash](https://unsplash.com)
3. **Contenido**: Edita los archivos en `src/pages/`
4. **Colores**: Personaliza en `src/index.css`

Ver [SETUP_GUIDE.md](./SETUP_GUIDE.md) para instrucciones detalladas

## Estructura del Proyecto / Project Structure / 项目结构

```
src/
├── components/
│   ├── ui/              # Componentes de shadcn/ui
│   ├── Navigation.tsx   # Navegación principal
│   ├── Hero.tsx         # Sección hero
│   ├── Footer.tsx       # Pie de página
│   ├── SEO.tsx          # Componente SEO
│   ├── ThemeToggle.tsx  # Toggle de tema
│   └── AnimatedSection.tsx # Animaciones
├── hooks/
│   ├── useTheme.ts      # Hook para tema
│   └── useContactForm.ts # Hook para formularios
├── pages/
│   ├── Index.tsx        # Página principal
│   ├── About.tsx        # Sobre nosotros
│   ├── Services.tsx     # Servicios
│   ├── Portfolio.tsx    # Portafolio
│   ├── Contact.tsx      # Contacto
│   └── NotFound.tsx     # 404
├── lib/
│   └── utils.ts         # Utilidades
├── App.tsx              # Componente principal
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales
```

## Personalización / Customization / 自定义

### Colores y Temas / Colors & Themes / 颜色和主题
Los colores se pueden personalizar editando las variables CSS en `src/index.css`:

```css
:root {
  --accent: 38 92% 50%;        /* Color principal */
  --primary: 222.2 47.4% 11.2%; /* Color secundario */
  --gradient-accent: linear-gradient(135deg, hsl(38, 92%, 50%) 0%, hsl(45, 100%, 60%) 100%);
}
```

### Tipografías / Typography / 字体
Las fuentes se pueden cambiar en `tailwind.config.ts`:

```typescript
fontFamily: {
  body: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Playfair Display', 'Georgia', 'serif'],
}
```

### Contenido / Content / 内容
- **Textos**: Edita los archivos en `src/pages/`
- **Imágenes**: Reemplaza las imágenes en `src/assets/`
- **Configuración**: Modifica `src/components/SEO.tsx` para SEO

## Scripts Disponibles / Available Scripts / 可用脚本

```bash
# Desarrollo / Development / 开发
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run preview      # Vista previa de la build de producción

# Calidad de Código / Code Quality / 代码质量
npm run lint         # Ejecuta el linter
npm run type-check   # Verifica tipos TypeScript

# Análisis / Analysis / 分析
npm run analyze      # Analiza el bundle
```

## Performance / 性能

### Lighthouse Scores / Lighthouse 分数
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimizaciones Incluidas / Included Optimizations / 包含的优化
- Code splitting automático
- Lazy loading de componentes
- Optimización de imágenes
- Minificación de CSS/JS
- Compresión gzip/brotli

## Configuración Avanzada / Advanced Configuration / 高级配置

### Formularios / Forms / 表单
Para habilitar el envío de formularios:

1. Crea una cuenta en [Web3Forms](https://web3forms.com/)
2. Obtén tu Access Key
3. Configura la variable `VITE_WEB3FORMS_KEY` en `.env.local`

### Analytics / 分析
Para Google Analytics:

1. Crea una propiedad en Google Analytics
2. Obtén tu Measurement ID
3. Configura la variable `VITE_GA_ID` en `.env.local`

### PWA / 渐进式网络应用
Para habilitar PWA completa:

1. Genera iconos en diferentes tamaños
2. Colócalos en `public/`
3. Actualiza `public/manifest.json`

## PWA Features / PWA 功能

- **Instalable**: Se puede instalar como app nativa
- **Offline**: Funciona sin conexión (con service worker)
- **Push Notifications**: Preparado para notificaciones
- **App-like**: Experiencia similar a app nativa

## SEO Features / SEO 功能

- **Meta Tags**: Automáticos y personalizables
- **Structured Data**: Schema.org markup
- **Sitemap**: Generado automáticamente
- **Robots.txt**: Configurado para SEO
- **Open Graph**: Para redes sociales
- **Twitter Cards**: Optimizado para Twitter 