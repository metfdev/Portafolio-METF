import {supabase} from "@supabase/supabase-js";

export const saveNewsletterEmail = async (email) => {
  const { data, error } = await supabase.from('newsletter').insert({
    email
  });

  if (error) {
    console.log(error);


    return{
      success: false,
      message: "Error al guardar el email en la base de datos"
    }
  }

  return {
    success: true,
    message: "Email guardado con éxito"
  };
};