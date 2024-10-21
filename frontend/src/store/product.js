import { create } from 'zustand';

export const useProductStore = create((set) => ({
   products: [],
   setProducts: (products) => set({products}),
   createProduct: async (newProduct) => {
      if(!newProduct.name || !newProduct.price || !newProduct.image){
         return {success: false, message: "Please provide all the product details"};
      }
      const resp = await fetch("/api/products",{
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newProduct)
      });
      const data = await resp.json();
      if(data.success){
         set((state) => ({products: [...state.products, data.data]}));
         return {success: true, message: "Product added successfully"};
      }
   },
   getAllProducts: async () => {
      const resp = await fetch("/api/products",{
         method: 'GET',
         headers: {
            'Content-Type': 'application/json'
         }
      });
      const data = await resp.json();
      return data;
   }
}));