# Guía de Configuración - AuraDesign Template
# Setup Guide - AuraDesign Template
# 设置指南 - AuraDesign 模板

## Pasos para Configurar tu Sitio Web / Steps to Configure Your Website / 配置网站的步骤

### 1. Configuración del Formulario de Contacto / Contact Form Configuration / 联系表单配置

#### Opción A: Web3Forms (Recomendado - Gratuito) / Option A: Web3Forms (Recommended - Free) / 选项A：Web3Forms（推荐 - 免费）
1. Ve a [Web3Forms](https://web3forms.com/)
2. Haz clic en "Get Access Key"
3. Copia tu access key
4. Abre `src/hooks/useContactForm.ts`
5. Reemplaza `'YOUR_WEB3FORMS_KEY'` con tu access key

```typescript
// En src/hooks/useContactForm.ts, línea 45
access_key: 'tu_access_key_aqui',
```

#### Opción B: Formspree (Alternativo) / Option B: Formspree (Alternative) / 选项B：Formspree（替代方案）
1. Ve a [Formspree](https://formspree.io/)
2. Crea una cuenta y un nuevo formulario
3. Copia tu Form ID
4. Reemplaza la URL en el código:

```typescript
// Reemplazar en useContactForm.ts
const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
```

### 2. Configuración de Imágenes / Image Configuration / 图像配置

#### Descargar Imágenes Gratuitas / Download Free Images / 下载免费图片
1. **Unsplash** (Recomendado): https://unsplash.com
   - Busca: "modern architecture", "interior design", "luxury home"
2. **Pexels**: https://pexels.com
   - Busca: "architecture", "interior", "modern house"

#### Estructura de Imágenes / Image Structure / 图像结构
```
src/assets/
├── hero-architecture.jpg     # Imagen principal del hero
├── project-1.jpg            # Proyecto 1 del portfolio
├── project-2.jpg            # Proyecto 2 del portfolio
├── project-3.jpg            # Proyecto 3 del portfolio
├── project-4.jpg            # Proyecto 4 del portfolio
├── project-5.jpg            # Proyecto 5 del portfolio
├── project-6.jpg            # Proyecto 6 del portfolio
├── team-member-1.jpg        # Miembro del equipo 1
├── team-member-2.jpg        # Miembro del equipo 2
└── team-member-3.jpg        # Miembro del equipo 3
```

#### Optimización de Imágenes / Image Optimization / 图像优化
- **Tamaño máximo**: 800KB por imagen
- **Formato**: WebP o JPEG
- **Resolución**: 1200x800px para portfolio, 1920x1080px para hero

### 3. Personalización de Contenido / Content Customization / 内容自定义

#### Información de la Empresa / Company Information / 公司信息
Edita estos archivos:
- `src/components/Hero.tsx` - Título y estadísticas
- `src/components/Footer.tsx` - Información de contacto
- `src/pages/About.tsx` - Historia y equipo
- `src/pages/Services.tsx` - Servicios ofrecidos

#### SEO y Meta Tags / SEO and Meta Tags / SEO和元标签
Edita `src/components/SEO.tsx`:
```typescript
// Ejemplo de configuración
<SEO 
  title="Tu Empresa - Arquitectura y Diseño"
  description="Descripción de tu empresa y servicios"
  keywords="arquitectura, diseño, tu ciudad, tu empresa"
/>
```

### 4. Configuración de Colores / Color Configuration / 颜色配置

#### Cambiar Colores Principales / Change Main Colors / 更改主色调
Edita `src/index.css`:
```css
:root {
  --accent: 38 92% 50%;        /* Color dorado */
  --primary: 222.2 47.4% 11.2%; /* Color principal */
  --gradient-accent: linear-gradient(135deg, hsl(38, 92%, 50%) 0%, hsl(45, 100%, 60%) 100%);
}
```

#### Ejemplos de Paletas de Colores / Color Palette Examples / 调色板示例
- **Azul Profesional**: `--accent: 210 100% 50%`
- **Verde Naturaleza**: `--accent: 120 60% 50%`
- **Rojo Elegante**: `--accent: 0 70% 50%`
- **Morado Creativo**: `--accent: 270 70% 50%`

### 5. Configuración de Dominio / Domain Configuration / 域名配置

#### Variables de Entorno / Environment Variables / 环境变量
Crea un archivo `.env.local`:
```env
VITE_SITE_URL=https://tudominio.com
VITE_GA_ID=G-XXXXXXXXXX  # Google Analytics (opcional)
```

### 6. Despliegue / Deployment / 部署

#### Opción A: Vercel (Recomendado) / Option A: Vercel (Recommended) / 选项A：Vercel（推荐）
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. ¡Listo! Se despliega automáticamente

#### Opción B: Netlify / Option B: Netlify / 选项B：Netlify
1. Sube tu código a GitHub
2. Conecta a Netlify
3. Configura las variables de entorno

#### Opción C: Hosting Tradicional / Option C: Traditional Hosting / 选项C：传统托管
1. Ejecuta `npm run build`
2. Sube la carpeta `dist` a tu servidor

### 7. Configuración Adicional / Additional Configuration / 额外配置

#### Google Analytics (Opcional) / Google Analytics (Optional) / Google Analytics（可选）
1. Crea una cuenta en Google Analytics
2. Obtén tu Measurement ID
3. Agrega a `.env.local`:
```env
VITE_GA_ID=G-XXXXXXXXXX
```

#### Favicon y Iconos / Favicon and Icons / 网站图标
1. Genera iconos en [Favicon.io](https://favicon.io/)
2. Reemplaza los archivos en `public/`
3. Actualiza `public/manifest.json`

## Solución de Problemas / Troubleshooting / 故障排除

### Formulario no funciona / Form doesn't work / 表单不工作
- Verifica que el access key sea correcto
- Revisa la consola del navegador para errores
- Asegúrate de que el servicio esté activo

### Imágenes no se cargan / Images don't load / 图片不加载
- Verifica que las rutas sean correctas
- Asegúrate de que los archivos existan
- Comprueba el formato de archivo

### Errores de compilación / Compilation errors / 编译错误
- Ejecuta `npm install` para instalar dependencias
- Verifica que Node.js sea versión 18+
- Revisa la consola para errores específicos

## Soporte / Support / 支持

Si tienes problemas:
1. Revisa esta guía
2. Consulta la documentación de las herramientas
3. Busca en Stack Overflow
4. Contacta al desarrollador

## Notas Importantes / Important Notes / 重要说明

- **No uses imágenes con derechos de autor**
- **Configura siempre tu propio formulario**
- **Personaliza el contenido antes de publicar**
- **Prueba en diferentes dispositivos**
- **Optimiza las imágenes para web**

¡Tu sitio web estará listo en menos de 1 hora!
Your website will be ready in less than 1 hour!
您的网站将在不到1小时内准备就绪！ 