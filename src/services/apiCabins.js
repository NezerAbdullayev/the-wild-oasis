import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
   const { data, error } = await supabase.from('cabins').select('*');

   if (error) {
      console.error(error);
      throw new Error('Cabins could not be loaded');
   }

   return data;
}

export async function createEditCabin(newCabin, id) {
   console.log(newCabin,id)
   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl); 

   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');

   const imagePath = hasImagePath
      ? newCabin.image
      : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

   //Create/edit cabin
   let query = supabase.from('cabins');

   //create
   if (!id)query= query.insert([{ ...newCabin, image: imagePath }]);

   //edit
   if (id)query= query.update({ ...newCabin, image: imagePath }).eq('id', id);

   const { data, error } = await query.select().single();

   if (error) {
      console.error(error);
      throw new Error('Cabins could not be loaded');
   }

   //upload image
   if(hasImagePath) return data;

   const { error: storageError } = await supabase.storage
      .from('cabin-images')
      .upload(imageName, newCabin.image);

   //şəkil tam yüklənməzsə cabini silsin
   if (storageError) {
      await supabase.from('cabins').delete().eq('id', data.id);
      console.error(storageError);
      throw new Error('Yüklənmı mümkün olmadı, cabin yaradılmadı.');
   }

   return data;
}

export async function deleteCabin(id) {
   const { data, error } = await supabase.from('cabins').delete().eq('id', id); //bura xüsusiyyətə görə silmə əmrini daxil edirik ve id gore silirik

   if (error) {
      console.error(error);
      throw new Error('Cabins could not be delete');
   }
   return data;
}
