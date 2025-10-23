const productos = [
  { 
    nombre: "Brahma lata 1x80 6x400", 
    precio: 400, 
    imagen: "media/brahma.jpg" 
  },
  { 
    nombre: "Valenciana 1x70 12x770", 
    precio: 770, 
    imagen: "media/valenciana.jpg" 
  },
  { 
    nombre: "Repelente Tax", 
    precio: 140, 
    imagen: "media/tax.jpg" 
  },
  { 
    nombre: "Tostada Bauducco + Margarina", 
    precio: 160, 
    imagen: "media/tostadamejor.png" 
  },
  { 
    nombre: "Samba lata 1x60 12x600", 
    precio: 60, 
    imagen: "media/samba.jpg" 
  },
  { 
    nombre: "Fideos Puritas 1kg", 
    precio: 85, 
    imagen: "media/puritas.jpg" 
  },
  { 
    nombre: "Fernet 1882", 
    precio: 150, 
    imagen: "media/fernet1882.jpg" 
  },
  { 
    nombre: "250gr Paleta + 250gr Queso Sandwich", 
    precio: 120, 
    imagen: "media/paletasandwich.jpg" 
  },
  { 
    nombre: "200gr Salame + 200gr Queso Sandwich", 
    precio: 120, 
    imagen: "media/salame.jpg" 
  },
  { 
    nombre: "200gr Paleta + 200gr Muzzarella", 
    precio: 130, 
    imagen: "media/paleta.jpg" 
  },
  { 
    nombre: "1 Kilo Panchos Sabrosero", 
    precio: 230, 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Fsf9XEHywJUiayEG-mFYfYEz1mUan6q2iA&s" 
  },
  { 
    nombre: "Esponja y Jabón Líquido Fontana", 
    precio: 30, 
    imagen: "https://discouy.vtexassets.com/arquivos/ids/1697074/Detergente-lavavajilla-Fontana-neutro-500-cc-0.jpg?v=638488059826600000" 
  },
  { 
    nombre: "Balde, Pala y Escoba", 
    precio: 200, 
    imagen: "media/Copilot_20251021_133154.png" 
  },
  { 
    nombre: "Waffles 3x$50", 
    precio: 50, 
    imagen: "https://f.fcdn.app/imgs/5d632a/www.elclon.com.uy/clonuy/ca23/original/catalogo/33462-1/460_460/waffle-relleno-de-vainilla-marilan-80g-waffle-relleno-de-vainilla-marilan-80g.jpg" 
  },
  { 
    nombre: "Galleta Rellena 4x$50", 
    precio: 50, 
    imagen: "https://f.fcdn.app/imgs/8494ac/www.elclon.com.uy/clonuy/02ee/original/catalogo/32660-1/460_460/galleta-rellena-glub-100g-dulce-de-leche-galleta-rellena-glub-100g-dulce-de-leche.jpg" 
  },
  { 
    nombre: "Matutina 2.5L x4", 
    precio: 170, 
    imagen: "https://tatauy.vtexassets.com/arquivos/ids/627335/Agua-Matutina-Sin-Gas-Pack-X4-2-5Ml-1-37259.jpg?v=638276457700000000" 
  },
  { 
    nombre: "Jugos Puritas 5x$50", 
    precio: 50, 
    imagen: "https://static.wixstatic.com/media/583684_1d4428c035f64575b25aa196d0e9b215~mv2.jpg/v1/fill/w_480,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/583684_1d4428c035f64575b25aa196d0e9b215~mv2.jpg" 
  },
  { 
    nombre: "Comida Perro Toky 3kg", 
    precio: 120, 
    imagen: "https://static.wixstatic.com/media/04d2de_30689c4109e04e9a9966cb1417b20a76~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/04d2de_30689c4109e04e9a9966cb1417b20a76~mv2.jpg" 
  },
  { 
    nombre: "Durazno en Almíbar Campero", 
    precio: 69.9, 
    imagen: "https://repongo.com.uy/cdn/shop/products/1234_b4086496-a8ff-433d-817e-07d5c9c44ef3.jpg?v=1645127302" 
  },
  { 
    nombre: "Harina Harinel x3", 
    precio: 99, 
    imagen: "https://tatauy.vtexassets.com/arquivos/ids/571363/Harina-Harinel-0-1K-Harina-Harinel-0-1K-1-29509.jpg?v=638082705791230000" 
  },
  { 
    nombre: "Lentejones Puritas 200g x3", 
    precio: 100, 
    imagen: "https://f.fcdn.app/imgs/b9d895/suchinasa.com/suchuy/aa8b/original/catalogo/16682_16682_1/460x460/lentejones-puritas-1kg-lentejones-puritas-1kg.jpg" 
  },
  { 
    nombre: "Galleta Kilo Dotim Dotoso", 
    precio: 140, 
    imagen: "https://d21wiczbqxib04.cloudfront.net/76RRHKLH0GD6M8PtVQYQJgO7gzs=/1600x0/smart/https://osuper-ecommerce-merkadosh.s3.sa-east-1.amazonaws.com/7463188e-e6bb152c525ce95d7f13b199d3acdbf7b54f0a7e8425e838404a29ee557a5019full.jpg" 
  },
  { 
    nombre: "Jugos Maxifruta 1x$65 2x$120", 
    precio: 120, 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj53-JaSKwdkVuHPGokttp8AeO4GzoPXPhsUXNFR_DH3OndiuUg3g57e0v9NjQ8FqbITs" 
  },
  { 
    nombre: "Budinazo", 
    precio: 50, 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hP0MdObhpe7WG9eQ8gUKbWR8j8tV1_dNxg&s" 
  },
  { 
    nombre: "Trofeu 3x$50", 
    precio: 50, 
    imagen: "https://santahelena.com/wp-content/uploads/2023/07/8533_PACKSHOT_TROFEU-153x192px-2.png" 
  },
];
