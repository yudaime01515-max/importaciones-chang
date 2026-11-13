/* =========================================================
   CHANG CORPORATION S.A.C. — DATOS EDITABLES DE LA WEB
   ---------------------------------------------------------
   Aquí cambias precios, productos, planes y datos de contacto
   sin tocar el diseño.
   • Para poner FOTO REAL a un producto: copia la foto a la
     carpeta img/productos/ y escribe su nombre en "img",
     por ejemplo:  img: "img/productos/galaxy-a57.jpg"
     Si "img" está vacío se muestra una ilustración automática.
   • "old" = precio anterior (tachado). Déjalo en 0 si no hay oferta.
   ========================================================= */

const CONFIG = {
  empresa: "Chang Corporation S.A.C.",
  whatsapp: "51994378096",            // con código de país, sin + ni espacios
  telefonoVisible: "994 378 096",
  correo: "changcorporationsac@gmail.com",
  direccion: "Jr. Puerto Pérez Maynas Mz 2 Lt 1",
  ciudad: "Pucallpa – Ucayali",
  mapaBusqueda: "Jr. Puerto Pérez Maynas, Pucallpa, Ucayali, Perú",
  horario: [
    { dias: "Lunes – Sábado", horas: "8:00 a.m. – 8:00 p.m." },
    { dias: "Domingo", horas: "9:00 a.m. – 2:00 p.m." }
  ],
  // Pega aquí los links de las redes. Si está vacío, el ícono no aparece.
  redes: {
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: ""
  }
};

const PRODUCTOS = [
  /* ---------------- CELULARES ---------------- */
  { id: "honx7c", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X7C", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.77\"", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 50 MP", "Batería 5200 mAh", "Red 4G"], price: 950, old: 0, badge: "", color: "#2bb5a0", ram: "8GB", alm: "256GB", img: "img/productos/honor-x7c-de-256-gb.webp" },
  { id: "samgalaxya07", cat: "celulares", tipo: "phone", marca: "Samsung", nombre: "Samsung Galaxy A07", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.7\"", "4GB de RAM", "128GB de almacenamiento", "Cámara principal 50 MP", "Batería 5000 mAh", "Red 4G"], price: 570, old: 0, badge: "", color: "#3a7bd5", ram: "4GB", alm: "128GB", img: "img/productos/sangung-a07.webp" },
  { id: "samgalaxya17", cat: "celulares", tipo: "phone", marca: "Samsung", nombre: "Samsung Galaxy A17", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.7\"", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 50 MP", "Batería 5000 mAh", "Red 4G"], price: 1100, old: 0, badge: "", color: "#3a7bd5", ram: "8GB", alm: "256GB", img: "img/productos/sangung-a17-de-256-gb.webp" },
  { id: "red15c", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi 15C", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.9\"", "4GB de RAM", "128GB de almacenamiento", "Cámara principal 50 MP", "Batería 6000 mAh", "Red 4G"], price: 750, old: 0, badge: "", color: "#ff6a13", ram: "4GB", alm: "128GB", img: "img/productos/redmi15c.webp" },
  { id: "honx9c", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X9C", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.78\"", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 108 MP", "Batería 6600 mAh", "Red 5G"], price: 1490, old: 0, badge: "", color: "#2bb5a0", ram: "8GB", alm: "256GB", img: "img/productos/honos-x9c.webp" },
  { id: "rednote14", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi Note 14", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.67\" AMOLED", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 108 MP", "Batería 5500 mAh", "Red 4G"], price: 1290, old: 0, badge: "", color: "#ff6a13", ram: "8GB", alm: "256GB", img: "img/productos/redmi-nt14.webp" },
  { id: "ztea35e", cat: "celulares", tipo: "phone", marca: "ZTE", nombre: "ZTE A35e", sub: "6GB RAM | 64GB", specs: ["Pantalla 6.52\" HD", "6GB de RAM", "64GB de almacenamiento", "Cámara principal 8 MP", "Batería 5000 mAh", "Red 4G"], price: 450, old: 0, badge: "", color: "#0a69c2", ram: "6GB", alm: "64GB", img: "img/productos/zte-a35e.webp" },
  { id: "motmotog06", cat: "celulares", tipo: "phone", marca: "Motorola", nombre: "Motorola Moto G06", sub: "4GB RAM | 64GB", specs: ["Pantalla 6.88\" 120 Hz", "4GB de RAM", "64GB de almacenamiento", "Cámara principal 50 MP", "Batería 5200 mAh", "Red 4G"], price: 550, old: 0, badge: "", color: "#5c2d91", ram: "4GB", alm: "64GB", img: "img/productos/motorola-g06.webp" },
  { id: "samgalaxya072", cat: "celulares", tipo: "phone", marca: "Samsung", nombre: "Samsung Galaxy A07", sub: "4GB RAM | 64GB", specs: ["Pantalla 6.7\"", "4GB de RAM", "64GB de almacenamiento", "Cámara principal 50 MP", "Batería 5000 mAh", "Red 4G"], price: 700, old: 0, badge: "", color: "#3a7bd5", ram: "4GB", alm: "64GB", img: "img/productos/sangung-a07.webp" },
  { id: "reda5", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi A5", sub: "3GB RAM | 64GB", specs: ["Pantalla 6.88\"", "3GB de RAM", "64GB de almacenamiento", "Cámara principal 32 MP", "Batería 5200 mAh", "Red 4G"], price: 550, old: 0, badge: "", color: "#ff6a13", ram: "3GB", alm: "64GB", img: "img/productos/redmi-a5.webp" },
  { id: "ztebladea56", cat: "celulares", tipo: "phone", marca: "ZTE", nombre: "ZTE Blade A56", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.7\"", "4GB de RAM", "128GB de almacenamiento", "Cámara principal 50 MP", "Batería 5000 mAh", "Red 4G"], price: 550, old: 0, badge: "", color: "#0a69c2", ram: "4GB", alm: "128GB", img: "img/productos/zte-a-56-normal.webp" },
  { id: "samgalaxya365g", cat: "celulares", tipo: "phone", marca: "Samsung", nombre: "Samsung Galaxy A36 5G", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.7\" Super AMOLED", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 50 MP", "Batería 5000 mAh", "Red 5G"], price: 1480, old: 0, badge: "", color: "#3a7bd5", ram: "8GB", alm: "256GB", img: "img/productos/sangung-a36-5g.webp" },
  { id: "ztebladea56pro", cat: "celulares", tipo: "phone", marca: "ZTE", nombre: "ZTE Blade A56 Pro", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.7\"", "4GB de RAM", "128GB de almacenamiento", "Cámara principal 50 MP", "Batería 5000 mAh", "Red 4G"], price: 600, old: 0, badge: "", color: "#0a69c2", ram: "4GB", alm: "128GB", img: "img/productos/zte-a56.webp" },
  { id: "samgalaxya172", cat: "celulares", tipo: "phone", marca: "Samsung", nombre: "Samsung Galaxy A17", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.7\"", "4GB de RAM", "128GB de almacenamiento", "Cámara principal 50 MP", "Batería 5000 mAh", "Red 4G"], price: 950, old: 0, badge: "", color: "#3a7bd5", ram: "4GB", alm: "128GB", img: "img/productos/sangung-a17.webp" },
  { id: "honmagic8lite", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor Magic 8 Lite", sub: "8GB RAM | 512GB", specs: ["Pantalla 6.79\" AMOLED", "8GB de RAM", "512GB de almacenamiento", "Cámara principal 108 MP", "Batería 8000 mAh", "Red 5G"], price: 2150, old: 0, badge: "", color: "#2bb5a0", ram: "8GB", alm: "512GB", img: "img/productos/honos-magic-8-lite-512-gb.webp" },
  { id: "samgalaxya06", cat: "celulares", tipo: "phone", marca: "Samsung", nombre: "Samsung Galaxy A06", sub: "4GB RAM | 64GB", specs: ["Pantalla 6.7\"", "4GB de RAM", "64GB de almacenamiento", "Cámara principal 50 MP", "Batería 5000 mAh", "Red 4G"], price: 550, old: 0, badge: "", color: "#3a7bd5", ram: "4GB", alm: "64GB", img: "img/productos/sangung-a06-64-gb.webp" },
  { id: "honx5c", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X5C", sub: "4GB RAM | 64GB", specs: ["Pantalla 6.74\"", "4GB de RAM", "64GB de almacenamiento", "Cámara principal 50 MP", "Batería 5200 mAh", "Red 4G"], price: 600, old: 0, badge: "", color: "#2bb5a0", ram: "4GB", alm: "64GB", img: "img/productos/honor-x5c-de-64gb.webp" },
  { id: "samgalaxya16", cat: "celulares", tipo: "phone", marca: "Samsung", nombre: "Samsung Galaxy A16", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.7\"", "4GB de RAM", "128GB de almacenamiento", "Cámara principal 50 MP", "Batería 5000 mAh", "Red 4G"], price: 850, old: 0, badge: "", color: "#3a7bd5", ram: "4GB", alm: "128GB", img: "img/productos/sangung-a16-de-128-gb.webp" },
  { id: "reda7pro", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi A7 Pro", sub: "4GB RAM | 64GB", specs: ["Pantalla 6.9\"", "4GB de RAM", "64GB de almacenamiento", "Cámara principal 13 MP", "Batería 6000 mAh", "Red 4G"], price: 600, old: 0, badge: "", color: "#ff6a13", ram: "4GB", alm: "64GB", img: "img/productos/redmi-a7-pro-64-gb.webp" },
  { id: "honx6c", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X6C", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.61\"", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 50 MP", "Batería 5300 mAh", "Red 4G"], price: 950, old: 0, badge: "", color: "#2bb5a0", ram: "8GB", alm: "256GB", img: "img/productos/honor-x6c-de-256-gb.webp" },
  { id: "honplay10", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor Play 10", sub: "3GB RAM | 64GB", specs: ["Pantalla 6.74\"", "3GB de RAM", "64GB de almacenamiento", "Red 4G"], price: 600, old: 0, badge: "", color: "#2bb5a0", ram: "3GB", alm: "64GB", img: "img/productos/honor-play-10-de-64-gb.webp" },
  { id: "honmagic8lite2", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor Magic 8 Lite", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.79\" AMOLED", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 108 MP", "Batería 8000 mAh", "Red 5G"], price: 1900, old: 0, badge: "", color: "#2bb5a0", ram: "8GB", alm: "256GB", img: "img/productos/honor-magic-8-lite-de-256-gb.webp" },
  { id: "honmagic7lite", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor Magic 7 Lite", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.78\" AMOLED", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 64 MP", "Batería 6600 mAh", "Red 5G"], price: 1600, old: 0, badge: "", color: "#2bb5a0", ram: "8GB", alm: "256GB", img: "img/productos/honor-magic-7-lite-de-256-gb.webp" },
  { id: "honx7d", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X7D", sub: "6GB RAM | 256GB", specs: ["Pantalla 6.77\"", "6GB de RAM", "256GB de almacenamiento", "Red 4G"], price: 1000, old: 0, badge: "", color: "#2bb5a0", ram: "6GB", alm: "256GB", img: "img/productos/honor-x7d-de-256-gb.webp" },
  { id: "red15", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi 15", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.9\"", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 50 MP", "Batería 7000 mAh", "Red 4G"], price: 950, old: 0, badge: "", color: "#ff6a13", ram: "8GB", alm: "256GB", img: "img/productos/redmi-15-de-256-gb.webp" },
  { id: "rednote15", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi Note 15", sub: "6GB RAM | 128GB", specs: ["Pantalla 6.77\" AMOLED", "6GB de RAM", "128GB de almacenamiento", "Cámara principal 108 MP", "Batería 5520 mAh", "Red 4G"], price: 1100, old: 0, badge: "", color: "#ff6a13", ram: "6GB", alm: "128GB", img: "img/productos/redmi-nt-15-de-128-gb.webp" },
  { id: "bsicorn", cat: "celulares", tipo: "phone", marca: "Básico", nombre: "Básico CORN", sub: "Teléfono básico", specs: [], price: 69, old: 0, badge: "", color: "#62c98a", ram: "", alm: "", img: "img/productos/basico-corn-de-2-gb.webp" },
  { id: "honx5cplus", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X5C Plus", sub: "4GB RAM | 256GB", specs: ["Pantalla 6.74\"", "4GB de RAM", "256GB de almacenamiento", "Cámara principal 50 MP", "Batería 5230 mAh", "Red 4G"], price: 750, old: 0, badge: "", color: "#2bb5a0", ram: "4GB", alm: "256GB", img: "img/productos/honor-x5c-plus-de-256-gb.webp" },
  { id: "reda7pro2", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi A7 Pro", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.9\"", "4GB de RAM", "128GB de almacenamiento", "Cámara principal 13 MP", "Batería 6000 mAh", "Red 4G"], price: 650, old: 0, badge: "", color: "#ff6a13", ram: "4GB", alm: "128GB", img: "img/productos/redmi-a7pro-de-128-gb.webp" },
  { id: "honplay102", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor Play 10", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.74\"", "4GB de RAM", "128GB de almacenamiento", "Red 4G"], price: 650, old: 0, badge: "", color: "#2bb5a0", ram: "4GB", alm: "128GB", img: "img/productos/honor-play-10-de-128-gb.webp" },
  { id: "itea100c", cat: "celulares", tipo: "phone", marca: "Itel", nombre: "Itel A100C", sub: "3GB RAM | 64GB", specs: ["3GB de RAM", "64GB de almacenamiento"], price: 400, old: 0, badge: "", color: "#e4002b", ram: "3GB", alm: "64GB", img: "img/productos/intel-a100c-de-64-gb.webp" },
  { id: "reda7", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi A7", sub: "3GB RAM | 64GB", specs: ["Pantalla 6.88\"", "3GB de RAM", "64GB de almacenamiento", "Red 4G"], price: 600, old: 0, badge: "", color: "#ff6a13", ram: "3GB", alm: "64GB", img: "img/productos/redmi-a7-de-64-gb.webp" },
  { id: "red152", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi 15", sub: "6GB RAM | 128GB", specs: ["Pantalla 6.9\"", "6GB de RAM", "128GB de almacenamiento", "Cámara principal 50 MP", "Batería 7000 mAh", "Red 4G"], price: 900, old: 0, badge: "", color: "#ff6a13", ram: "6GB", alm: "128GB", img: "img/productos/redmi15-de-128-gb.webp" },
  { id: "honx5d", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X5D", sub: "4GB RAM | 64GB", specs: ["Pantalla 6.74\"", "4GB de RAM", "64GB de almacenamiento", "Red 4G"], price: 700, old: 0, badge: "", color: "#2bb5a0", ram: "4GB", alm: "64GB", img: "img/productos/honor-x5d-de-64-gb.webp" },
  { id: "red15c2", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi 15C", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.9\"", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 50 MP", "Batería 6000 mAh", "Red 4G"], price: 1100, old: 0, badge: "", color: "#ff6a13", ram: "8GB", alm: "256GB", img: "img/productos/redmi-15-c-de-256-gb.webp" },
  { id: "honx8d", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X8D", sub: "8GB RAM | 256GB", specs: ["Pantalla 6.77\"", "8GB de RAM", "256GB de almacenamiento", "Cámara principal 108 MP", "Red 4G"], price: 1400, old: 0, badge: "", color: "#2bb5a0", ram: "8GB", alm: "256GB", img: "img/productos/honor-x8d-de-256-gb.webp" },
  { id: "rednote15pro", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi Note 15 Pro", sub: "6GB RAM | 128GB", specs: ["Pantalla 6.83\"", "6GB de RAM", "128GB de almacenamiento", "Red 5G"], price: 1600, old: 0, badge: "", color: "#ff6a13", ram: "6GB", alm: "128GB", img: "img/productos/redmi-nt-15-de-256-gb.webp" },
  { id: "tcl305", cat: "celulares", tipo: "phone", marca: "TCL", nombre: "TCL 305", sub: "2GB RAM | 64GB", specs: ["2GB de RAM", "64GB de almacenamiento"], price: 350, old: 0, badge: "", color: "#e30613", ram: "2GB", alm: "64GB", img: "img/productos/tcl-305-de-64-gb.webp" },
  { id: "red17", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi 17", sub: "4GB RAM | 128GB", specs: ["4GB de RAM", "128GB de almacenamiento", "Batería 7500 mAh"], price: 950, old: 0, badge: "", color: "#ff6a13", ram: "4GB", alm: "128GB", img: "img/productos/redmi-17-128-gb.webp" },
  { id: "rednote152", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi Note 15", sub: "6GB RAM | 128GB", specs: ["Pantalla 6.77\" AMOLED", "6GB de RAM", "128GB de almacenamiento", "Cámara principal 108 MP", "Batería 5520 mAh", "Red 4G"], price: 1100, old: 0, badge: "", color: "#ff6a13", ram: "6GB", alm: "128GB", img: "img/productos/redmi-nt-15-de-128-gb.webp" },
  { id: "red15c3", cat: "celulares", tipo: "phone", marca: "Redmi", nombre: "Redmi 15C", sub: "4GB RAM | 256GB", specs: ["Pantalla 6.9\"", "4GB de RAM", "256GB de almacenamiento", "Cámara principal 50 MP", "Batería 6000 mAh", "Red 4G"], price: 850, old: 0, badge: "", color: "#ff6a13", ram: "4GB", alm: "256GB", img: "img/productos/redmi-15c-de-256-gb.webp" },
  { id: "oppreno14fe", cat: "celulares", tipo: "phone", marca: "Oppo", nombre: "Oppo Reno 14 FE", sub: "256GB", specs: ["Pantalla 6.57\"", "256GB de almacenamiento", "Red 5G"], price: 2500, old: 0, badge: "", color: "#1a9f54", ram: "", alm: "256GB", img: "img/productos/oppo-reno-14-f-de-256-gb.webp" },
  { id: "opprenoa6pro", cat: "celulares", tipo: "phone", marca: "Oppo", nombre: "Oppo Reno A6 Pro", sub: "256GB", specs: ["256GB de almacenamiento", "Red 5G"], price: 2200, old: 0, badge: "", color: "#1a9f54", ram: "", alm: "256GB", img: "img/productos/oppo-a6-pro-de-256-gb.webp" },
  { id: "itea50c", cat: "celulares", tipo: "phone", marca: "Itel", nombre: "Itel A50C", sub: "2GB RAM | 64GB", specs: ["Pantalla 6.6\"", "2GB de RAM", "64GB de almacenamiento"], price: 400, old: 0, badge: "", color: "#e4002b", ram: "2GB", alm: "64GB", img: "img/productos/intel-a50c-de-64-gb.webp" },
  { id: "honx6e", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X6E", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.56\"", "4GB de RAM", "128GB de almacenamiento", "Red 4G"], price: 900, old: 0, badge: "", color: "#2bb5a0", ram: "4GB", alm: "128GB", img: "img/productos/honor-x6e-de-128-gb.webp" },
  { id: "honx5d2", cat: "celulares", tipo: "phone", marca: "Honor", nombre: "Honor X5D", sub: "4GB RAM | 128GB", specs: ["Pantalla 6.74\"", "4GB de RAM", "128GB de almacenamiento", "Red 4G"], price: 700, old: 0, badge: "", color: "#2bb5a0", ram: "4GB", alm: "128GB", img: "img/productos/honor-x5d-de-128-gb.webp" },
  { id: "logl65e", cat: "celulares", tipo: "phone", marca: "Logic", nombre: "Logic L65E", sub: "Teléfono básico", specs: [], price: 350, old: 0, badge: "", color: "#6b7280", ram: "", alm: "", img: "img/productos/logic-l65e.webp" },

  /* ---------------- ACCESORIOS ---------------- */
  { id: "airp", cat: "accesorios", tipo: "earbuds", marca: "Otros", nombre: "Audífonos Bluetooth AirPods Pro 2 (Genérico)", sub: "Bluetooth 5.3", specs: ["Bluetooth 5.3", "Cancelación de ruido", "Estuche de carga"], price: 129, old: 0, badge: "Más vendido", color: "#ffffff", sub2: "Audífonos", img: "" },
  { id: "jbl520", cat: "accesorios", tipo: "headphones", marca: "JBL", nombre: "Audífonos JBL Tune 520BT", sub: "Inalámbricos", specs: ["Bluetooth 5.3", "Hasta 57 horas de batería", "Sonido JBL Pure Bass"], price: 189, old: 0, badge: "Nuevo", color: "#1b1f24", sub2: "Audífonos", img: "" },
  { id: "carg25", cat: "accesorios", tipo: "charger", marca: "Samsung", nombre: "Cargador Samsung 25W Super Fast Charging", sub: "USB-C", specs: ["Carga rápida 25W", "Puerto USB-C", "Compatible con Samsung"], price: 59, old: 79, badge: "Oferta", color: "#ffffff", sub2: "Cargadores", img: "" },
  { id: "spigen", cat: "accesorios", tipo: "case", marca: "Otros", nombre: "Case Spigen para iPhone 15", sub: "Antigolpes", specs: ["Protección antigolpes", "Diseño premium", "Diferentes colores"], price: 99, old: 0, badge: "", color: "#1d2127", sub2: "Fundas", img: "" },
  { id: "mica", cat: "accesorios", tipo: "glass", marca: "Otros", nombre: "Mica de vidrio templado", sub: "9H", specs: ["Protección 9H", "Alta sensibilidad", "Para varios modelos"], price: 25, old: 0, badge: "", color: "#9fd3ff", sub2: "Micas", img: "" },
  { id: "anker", cat: "accesorios", tipo: "cable", marca: "Anker", nombre: "Cable USB-C a USB-C Anker 60W", sub: "1.8 m", specs: ["Carga rápida 60W", "Material trenzado", "Alta durabilidad"], price: 49, old: 0, badge: "", color: "#20242a", sub2: "Cargadores", img: "" },
  { id: "sd128", cat: "accesorios", tipo: "microsd", marca: "SanDisk", nombre: "Memoria microSD SanDisk 128GB", sub: "Ultra", specs: ["Alta velocidad", "Ideal para fotos y videos", "Compatible con celulares"], price: 79, old: 0, badge: "", color: "#c8102e", sub2: "Memorias", img: "" },
  { id: "baseus", cat: "accesorios", tipo: "holder", marca: "Baseus", nombre: "Soporte para auto Baseus", sub: "Rotación 360°", specs: ["Rotación 360°", "Sujeción firme", "Compatible con varios modelos"], price: 69, old: 0, badge: "", color: "#2a2f36", sub2: "Soportes", img: "" },
  { id: "buds6", cat: "accesorios", tipo: "earbuds", marca: "Xiaomi", nombre: "Audífonos Xiaomi Redmi Buds 6 Active", sub: "Inalámbricos", specs: ["Cancelación de ruido", "Hasta 30 horas de batería", "Diseño compacto"], price: 99, old: 129, badge: "Oferta", color: "#ffffff", sub2: "Audífonos", img: "" },
  { id: "flip6", cat: "accesorios", tipo: "speaker", marca: "JBL", nombre: "Parlante JBL Flip 6", sub: "Bluetooth", specs: ["Sonido potente", "Hasta 12 horas", "Resistente al agua (IP67)"], price: 399, old: 549, badge: "Oferta", color: "#1c1f24", sub2: "Audio", img: "" },
  { id: "watch4", cat: "accesorios", tipo: "watch", marca: "Xiaomi", nombre: "Smartwatch Redmi Watch 4", sub: "AMOLED 1.97\"", specs: ["Pantalla AMOLED 1.97\"", "Hasta 20 días de batería", "Resistente al agua 5ATM"], price: 299, old: 449, badge: "Oferta", color: "#1c1f24", sub2: "Otros", img: "" },
  { id: "lenovobuds", cat: "accesorios", tipo: "earbuds", marca: "Lenovo", nombre: "Audífonos inalámbricos Lenovo", sub: "Bluetooth", specs: ["Bluetooth 5.3", "Estuche de carga", "Micrófono integrado"], price: 89, old: 0, badge: "Popular", color: "#1c1f24", sub2: "Audífonos", img: "" },

  /* ---------------- HOGAR ---------------- */
  { id: "tv65", cat: "hogar", tipo: "tv", marca: "Samsung", nombre: "Samsung Smart TV 65\" 4K Crystal UHD", sub: "Smart TV (Tizen)", specs: ["Pantalla 65 pulgadas", "Resolución 4K UHD", "3 HDMI / 2 USB"], price: 2299, old: 2699, badge: "Oferta", color: "#3a7bd5", sub2: "Televisores", img: "" },
  { id: "mabe250", cat: "hogar", tipo: "fridge", marca: "Mabe", nombre: "Mabe Refrigeradora 250L No Frost", sub: "No Frost", specs: ["250 litros", "No Frost", "Eficiencia energética A"], price: 1499, old: 0, badge: "", color: "#c9ced6", sub2: "Refrigeradoras", img: "" },
  { id: "lg12", cat: "hogar", tipo: "washer", marca: "LG", nombre: "LG Lavadora 12kg Carga Superior", sub: "TurboDrum", specs: ["12 kg de capacidad", "TurboDrum", "Múltiples programas"], price: 1299, old: 0, badge: "", color: "#6b7280", sub2: "Lavadoras", img: "" },
  { id: "oster", cat: "hogar", tipo: "blender", marca: "Oster", nombre: "Oster Licuadora 1.5L BLSTKAG", sub: "700W", specs: ["Potencia 700W", "Vaso de vidrio 1.5L", "6 velocidades"], price: 189, old: 0, badge: "", color: "#1c1f24", sub2: "Pequeños electrodomésticos", img: "" },
  { id: "imaco", cat: "hogar", tipo: "pot", marca: "Imaco", nombre: "Imaco Olla Arrocera 1.8L", sub: "Antiadherente", specs: ["1.8 litros de capacidad", "Función mantener caliente", "Incluye vaporera"], price: 139, old: 199, badge: "Oferta", color: "#c0c6cf", sub2: "Pequeños electrodomésticos", img: "" },
  { id: "miray", cat: "hogar", tipo: "microwave", marca: "Miray", nombre: "Miray Microondas 25L", sub: "Panel digital", specs: ["25 litros", "10 niveles de potencia", "Función descongelado"], price: 299, old: 0, badge: "", color: "#2a2f36", sub2: "Línea blanca", img: "" },
  { id: "thomas", cat: "hogar", tipo: "stove", marca: "Thomas", nombre: "Thomas Cocina a Gas 4 Hornillas", sub: "Acero inoxidable", specs: ["4 hornillas", "Horno con luz", "Encendido automático"], price: 699, old: 0, badge: "", color: "#c0c6cf", sub2: "Cocina", img: "" },
  { id: "record", cat: "hogar", tipo: "fan", marca: "Record", nombre: "Record Ventilador de Pie 16\"", sub: "3 velocidades", specs: ["16 pulgadas", "3 velocidades", "Altura regulable"], price: 169, old: 0, badge: "", color: "#1c1f24", sub2: "Climatización", img: "" },
  { id: "tv55", cat: "hogar", tipo: "tv", marca: "Samsung", nombre: "Smart TV Samsung 55\" 4K", sub: "Smart TV (Tizen)", specs: ["Resolución 4K UHD", "Smart TV (Tizen)", "3 HDMI / 2 USB"], price: 1599, old: 2199, badge: "Oferta", color: "#e46d3b", sub2: "Televisores", img: "" },
  { id: "tv50lg", cat: "hogar", tipo: "tv", marca: "LG", nombre: "Smart TV LG 50\" 4K", sub: "webOS", specs: ["Resolución 4K UHD", "Smart TV webOS", "Control por voz"], price: 1199, old: 0, badge: "Nuevo", color: "#8a5cf6", sub2: "Televisores", img: "" },
  { id: "airfryer", cat: "hogar", tipo: "airfryer", marca: "Oster", nombre: "Olla Freidora de Aire 5.5L", sub: "1500W", specs: ["5.5 litros", "1500W de potencia", "Panel digital"], price: 349, old: 0, badge: "", color: "#1c1f24", sub2: "Pequeños electrodomésticos", img: "" },

  /* ---------------- OPERADORES ---------------- */
  { id: "chipclaro", cat: "operadores", tipo: "simclaro", marca: "Claro", nombre: "Chip Prepago Claro", sub: "Activación inmediata", specs: ["Activación inmediata", "Incluye internet y llamadas", "Compatible con todos los equipos"], price: 10, old: 15, badge: "Promoción", color: "#da291c", img: "" },
  { id: "chipbitel", cat: "operadores", tipo: "simbitel", marca: "Bitel", nombre: "Chip Prepago Bitel", sub: "Activación inmediata", specs: ["Activación inmediata", "Incluye internet y llamadas", "Compatible con todos los equipos"], price: 10, old: 15, badge: "Promoción", color: "#ffd100", img: "" }
];

/* Planes: precios REFERENCIALES — confirma con el cliente antes de publicar */
const PLANES = {
  claro: [
    { nombre: "Plan Max 69", gb: "60 GB", precio: 69 },
    { nombre: "Plan Max 89", gb: "100 GB", precio: 89 },
    { nombre: "Plan Max 109", gb: "150 GB", precio: 109, top: true },
    { nombre: "Plan Max 129", gb: "GB ILIMITADOS", precio: 129 }
  ],
  bitel: [
    { nombre: "Plan Ilimitado 39", gb: "40 GB", precio: 39 },
    { nombre: "Plan Ilimitado 49", gb: "70 GB", precio: 49 },
    { nombre: "Plan Ilimitado 69", gb: "100 GB", precio: 69, top: true },
    { nombre: "Plan Ilimitado 89", gb: "GB ILIMITADOS", precio: 89 }
  ]
};

const SERVICIOS = [
  { nombre: "Cambio de pantalla", desde: 150, icon: "phone", tag: "Más solicitado", items: ["Pantallas originales o calidad premium", "Instalación profesional", "Garantía incluida"] },
  { nombre: "Cambio de batería", desde: 80, icon: "battery", items: ["Baterías de larga duración", "Compatibles y originales", "Instalación segura"] },
  { nombre: "Reparación de puerto de carga", desde: 70, icon: "plug", items: ["Soluciona problemas de carga", "Repuestos de calidad", "Prueba y garantía"] },
  { nombre: "Reparación de placa", desde: 120, icon: "cpu", items: ["Solución a fallas complejas", "Técnicos especializados", "Diagnóstico gratuito"] }
];

const VACANTES = [
  { puesto: "Asesor de Ventas", area: "Tienda", icon: "headset", exp: "No requerida", horario: "Lunes a domingo (1 día de descanso)", desc: "Atención al cliente, ventas y apoyo en caja. Trabajo en tienda." },
  { puesto: "Vendedor de Campo – Claro", area: "Campo", icon: "signal", exp: "No requerida", horario: "Lunes a sábado", desc: "Venta de servicios Claro (planes móviles, internet hogar, etc.). Trabajo 100% en campo." },
  { puesto: "Asesor Comercial – Internet Hogar", area: "Campo", icon: "home", exp: "Mínimo 6 meses en ventas", horario: "Lunes a sábado (8 horas)", desc: "Promoción y venta de productos de Internet Hogar. Trabajo en campo." }
];

const MARCAS = ["Samsung", "Xiaomi", "Apple", "Honor", "Motorola", "Huawei", "Realme", "Oppo", "Vivo", "Lenovo", "LG", "JBL", "Mabe", "Oster", "Imaco"];
