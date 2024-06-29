import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'public/upload');
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const file = files.file;
      const fileName = path.basename(file.path);
      const filePath = `/upload/${fileName}`;

      // Simpan nama file ke database (sesuaikan dengan implementasi database Anda)
      // Contoh menggunakan Prisma
      await prisma.image.create({ data: { fileName: fileName } });

      res.status(200).json({ filePath });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
