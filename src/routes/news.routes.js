const express = require('express');
const router = express.Router();
const upload = require('../config/cloudinary');

// El nombre 'image' debe coincidir con el formData.append('image', file) del frontend
router.post('/api/news', upload.single('image'), async (req, res) => {
  try {
    // req.body contiene los campos de texto (title, content)
    const { title, content } = req.body;
    let imageUrl = '';

    // Si se subió una imagen, Cloudinary devuelve la URL de la nube en req.file.path
    if (req.file) {
      imageUrl = req.file.path;
    }

    // Aquí guardas la información en tu base de datos
    const newPost = {
      title: title || '',
      description: content, // En tu tipo Frontend (news.types.ts) tienes 'description'
      imageUrl: imageUrl,   // Tu frontend espera imageUrl
      createdAt: new Date().toISOString()
    };

    // Ejemplo con MongoDB (Mongoose):
    // const postGuardado = await NewsModel.create(newPost);

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ message: "Error al crear la noticia" });
  }
});

router.get('/api/news', async (req, res) => {
  try {
    // Aquí deberías consultar tu base de datos. 
    // Por ahora enviaremos un arreglo vacío o datos de prueba para que no de error.
    const news = [
       {
          id: "1",
          title: "Noticia desde el Backend",
          description: "Si ves esto, la conexión funciona.",
          createdAt: new Date().toISOString(),
       }
    ];
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener noticias" });
  }
});

// ... aquí debajo va el router.post('/api/news', upload.single('image'), ...) que hicimos antes
module.exports = router;
