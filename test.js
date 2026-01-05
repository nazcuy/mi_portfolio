const { chromium } = require('playwright');

async function testWebsite() {
  console.log('Iniciando prueba de la página web...');
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const errors = [];
  
  // Listen for console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  
  // Listen for page errors
  page.on('pageerror', error => {
    errors.push(error.message);
  });
  
  try {
    // Navigate to the page
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
    
    console.log('Página cargada exitosamente');
    
    // Verify key elements exist
    const navbar = await page.$('.navbar');
    const presentation = await page.$('.presentation');
    const news = await page.$('.news');
    const projects = await page.$('.projects');
    const footer = await page.$('.footer');
    
    console.log('Verificando elementos clave:');
    console.log('- Navbar:', navbar ? '✓ Encontrado' : '✗ No encontrado');
    console.log('- Presentación:', presentation ? '✓ Encontrado' : '✗ No encontrado');
    console.log('- Noticias:', news ? '✓ Encontrado' : '✗ No encontrado');
    console.log('- Proyectos:', projects ? '✓ Encontrado' : '✗ No encontrado');
    console.log('- Footer:', footer ? '✓ Encontrado' : '✗ No encontrado');
    
    // Check for console errors
    if (errors.length > 0) {
      console.log('\nErrores de consola encontrados:');
      errors.forEach(err => console.log('-', err));
    } else {
      console.log('\n✓ No se encontraron errores de consola');
    }
    
    // Test navigation to a project
    const projectCard = await page.$('.project-card');
    if (projectCard) {
      await projectCard.click();
      await page.waitForTimeout(1000);
      const currentUrl = page.url();
      console.log('\nNavegación a proyecto:', currentUrl.includes('/project') ? '✓ Funcionando' : '✗ Error');
    }
    
    console.log('\n=== Prueba completada ===');
    
  } catch (error) {
    console.error('Error durante la prueba:', error.message);
  } finally {
    await browser.close();
  }
}

testWebsite();
