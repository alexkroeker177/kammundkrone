import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Über Kamm & Krone</h2>
            <p className="text-gray-600 mb-6">
              Bei Kamm & Krone verbinden wir Tradition und Moderne – von klassischen Schnitten bis zu den neuesten Trends. 
              Unsere Mission ist es, Ihre natürliche Schönheit zu unterstreichen und Ihnen ein einzigartiges Styling-Erlebnis zu bieten.
            </p>
            <Button variant="outline" className="border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-white">
              Mehr über uns
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
              alt="Salon Impression"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}