
import supabase from "./config/supabaseClient";

export default async function Home() {
  const { data: smoothies } = await supabase.from('smoothies').select('id, title')

  if (!smoothies) {
    return <p>No posts found.</p>
  }

  return smoothies.map((smoothuie) => (
    <div key={smoothuie.id}>
      <p>{smoothuie.title}</p>
    </div>
  ))
}
