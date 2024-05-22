import { notFound } from "next/navigation";
import supabase from "@/app/config/supabaseClient";

async function getProduct(id) {
  const { data, error } = await supabase
    .from('smoothies')  // Replace with your actual table name
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    throw new Error('Product not found');
  }
  return data;
}

export default async function ProductDetails({ params }) {
  try {
    const product = await getProduct(parseInt(params.id));

    return (
      <main className="container mx-auto min-h-screen flex justify-center items-center">
        <div className="Card">
          <div className="p-4 rounded-md flex items-center flex-wrap justify-center md:flex-nowrap">
            <div className="p-10">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <h3 className="text-xl font-semibold">{product.metho}</h3>

              <div className="mt-4">
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
    return null;
  }
}
