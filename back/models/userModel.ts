import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
    nombre: { type: String, required: [true, 'El nombre es necesario y unico'] },
    email: {
      type: String,
      unique:true,
      required: [true, 'El correo es necesario y unico'],
    },
    empresa: { type: String, required: [true, 'La empresa es necesario'] },
    telefono: { type: String, required: [true, 'El telefono es necesario'] },
    categoria: { type: String, required: [true, 'La categoria es necesario'] },
    mjs: { type: String, required: [true, 'El mjs necesario'] },
    created: { type: Date, default: Date.now}
});

export const Usuario = mongoose.model<any>("users", userSchema);