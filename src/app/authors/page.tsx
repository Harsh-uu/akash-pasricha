// src/app/authors/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search, X } from "lucide-react";

// --- DUMMY DATA ---
const allAuthors = [
    "Alice Walker", "Anne Rice", "Anthony Doerr", "Arthur Miller",
    "Bernard Cornwell", "Brandon Sanderson", "Brent Weeks", "Brian Jacques",
    "C.S. Lewis", "Charles Dickens", "Charlotte Brontë", "Chimamanda Ngozi Adichie",
    "David Mitchell", "Diana Gabaldon", "Donna Tartt", "Doris Kearns Goodwin",
    "Edgar Allan Poe", "Elena Ferrante", "Emily Dickinson", "Ernest Hemingway",
    "F. Scott Fitzgerald", "Frank Herbert", "Franz Kafka", "Fyodor Dostoevsky",
    "Gabriel García Márquez", "George Orwell", "George R.R. Martin", "Gillian Flynn",
    "Haruki Murakami", "Herman Melville", "Homer", "Hanya Yanagihara",
    "Isaac Asimov", "Isabel Allende", "Italo Calvino", "Ian McEwan",
    "J.K. Rowling", "J.R.R. Tolkien", "James Baldwin", "Jane Austen",
    "Kazuo Ishiguro", "Ken Follett", "Khaled Hosseini", "Kurt Vonnegut",
    "Leo Tolstoy", "Lewis Carroll", "Liane Moriarty", "Louisa May Alcott",
    "Margaret Atwood", "Mark Twain", "Mary Shelley", "Maya Angelou",
    "Neil Gaiman", "Nikolai Gogol", "N.K. Jemisin", "Nora Roberts",
    "Octavia Butler", "Oscar Wilde", "Orson Scott Card", "Ocean Vuong",
    "Paulo Coelho", "Philip K. Dick", "Patrick Rothfuss", "Pierce Brown",
    "Ray Bradbury", "Robert Jordan", "Robin Hobb", "Roald Dahl",
    "Stephen King", "Sylvia Plath", "Simone de Beauvoir", "Salman Rushdie",
    "Terry Pratchett", "Toni Morrison", "Truman Capote", "T.S. Eliot",
    "Ursula K. Le Guin", "Umberto Eco",
    "Virginia Woolf", "Vladimir Nabokov", "Victor Hugo", "Voltaire",
    "William Faulkner", "William Shakespeare", "Willa Cather", "Walter Isaacson",
    "Zadie Smith", "Zora Neale Hurston"
].map((name, i) => ({
    id: i + 1,
    name,
    imageSrc: `/authors/author-${(i % 8) + 1}.jpg`,
}));

const ALPHABET = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const ITEMS_PER_PAGE = 16;


// --- 1. MOVED FilterSidebar OUTSIDE the main component ---
// It's now a standalone component that receives props.
const FilterSidebar = ({
  searchTerm,
  setSearchTerm,
  selectedLetter,
  setSelectedLetter,
  resetFilters,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedLetter: string;
  setSelectedLetter: (letter: string) => void;
  resetFilters: () => void;
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Filters</h3>
        <button onClick={resetFilters} className="text-sm font-semibold text-rose-600 hover:underline">Reset</button>
      </div>
      {/* Search Bar */}
      <div>
        <label htmlFor="author-search" className="sr-only">Search Authors</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            id="author-search"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
          />
        </div>
      </div>
      {/* Alphabetical Filter */}
      <div>
        <p className="font-semibold mb-2">Filter by Letter</p>
        <div className="flex flex-wrap gap-2">
            <button
                onClick={() => setSelectedLetter("All")}
                className={`w-10 h-10 text-sm font-bold transition-colors ${selectedLetter === 'All' ? 'bg-rose-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                All
            </button>
          {ALPHABET.map(letter => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-10 h-10 text-sm font-bold transition-colors ${selectedLetter === letter ? 'bg-rose-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


// --- Main Page Component ---
export default function AuthorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const filteredAuthors = useMemo(() => {
    setCurrentPage(1);
    return allAuthors.filter(author => {
      const matchesLetter = selectedLetter === "All" || author.name.toUpperCase().startsWith(selectedLetter);
      const matchesSearch = author.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesLetter && matchesSearch;
    });
  }, [searchTerm, selectedLetter]);

  const totalPages = Math.ceil(filteredAuthors.length / ITEMS_PER_PAGE);
  const paginatedAuthors = filteredAuthors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  const resetFilters = () => {
      setSearchTerm("");
      setSelectedLetter("All");
  }

  // --- 2. Define props to pass to the FilterSidebar ---
  const filterProps = {
    searchTerm,
    setSearchTerm,
    selectedLetter,
    setSelectedLetter,
    resetFilters,
  };

  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:underline">Home</a>
              <span className="mx-2">&gt;</span>
            </li>
            <li className="flex items-center text-gray-700 font-medium">Authors</li>
          </ol>
        </nav>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">Authors</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Mobile Filter Controls --- */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileFilterVisible(!isMobileFilterVisible)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white border shadow-sm"
            >
              {isMobileFilterVisible ? <X size={18} /> : <Filter size={18} />}
              {isMobileFilterVisible ? "Hide Filters" : "Show Filters"}
            </button>
            <AnimatePresence>
              {isMobileFilterVisible && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="p-6 bg-white border">
                    {/* --- 3. Pass props to the mobile instance --- */}
                    <FilterSidebar {...filterProps} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- Desktop Filter Sidebar --- */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="p-6 bg-white border sticky top-24">
              {/* --- 4. Pass props to the desktop instance --- */}
              <FilterSidebar {...filterProps} />
            </div>
          </aside>

          {/* --- Main Content: Authors Grid and Pagination --- */}
          <main className="lg:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {paginatedAuthors.map(author => (
                <div key={author.id} className="text-center cursor-pointer group">
                  <div className="relative w-full aspect-square mx-auto overflow-hidden shadow-md">
                    <Image src="/Kevin.jpg" alt={author.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-bold mt-4 group-hover:text-rose-600 truncate">{author.name}</h3>
                </div>
              ))}
            </div>
            
            {/* --- Pagination --- */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 bg-white border disabled:opacity-50">Previous</button>
                <span className="text-sm font-medium">Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-4 py-2 bg-white border disabled:opacity-50">Next</button>
              </div>
            )}
            
            {filteredAuthors.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-lg text-gray-500">No authors match the current filters.</p>
                </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}