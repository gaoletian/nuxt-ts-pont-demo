// enable middleware you must setup pulgins at nuxt.config.js
export default <Nuxt.Plugin>async function(ctx, inject) {
  let pet = await ctx.$api.petstore.pet.getPetById.request({ petId: 1 });
  console.log(pet.name);
};
