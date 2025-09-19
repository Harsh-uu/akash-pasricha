// src/app/books/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Filter, X } from "lucide-react";

// --- DUMMY DATA ---
// A comprehensive dataset to demonstrate filtering and pagination.
const allBooks = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Book Title ${i + 1}`,
  author: `Author ${String.fromCharCode(65 + (i % 26))}`,
  price: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
  imageSrc: `/books/book-cover-${(i % 5) + 1}.jpg`, // Assuming you have 5 placeholder images
  imprint: ["Penguin House", "Bloomsbury", "Harper Collins"][i % 3],
  series: ["The Grand Library", "Chronicles of Yore", "None"][i % 3],
  format: ["Hardcover", "Paperback", "Ebook"][i % 3],
  category: ["Fiction", "Sci-Fi", "Non-Fiction", "Fantasy"][i % 4],
  age: ["0-5", "6-12", "Young Adult", "Adult"][i % 4],
}));

const filterOptions = {
  imprints: [...new Set(allBooks.map(b => b.imprint))],
  series: [...new Set(allBooks.map(b => b.series))],
  formats: [...new Set(allBooks.map(b => b.format))],
  categories: [...new Set(allBooks.map(b => b.category))],
  ages: [...new Set(allBooks.map(b => b.age))],
};

const initialFilters = {
  price: [50],
  imprints: [] as string[],
  series: [] as string[],
  formats: [] as string[],
  categories: [] as string[],
  ages: [] as string[],
};

const ITEMS_PER_PAGE = 12;

// --- Main Page Component ---
export default function BooksPage() {
  const [filters, setFilters] = useState(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const handleCheckboxChange = (category: keyof typeof initialFilters, value: string) => {
    setFilters(prev => {
      const list = prev[category] as string[];
      const newList = list.includes(value)
        ? list.filter(item => item !== value)
        : [...list, value];
      return { ...prev, [category]: newList };
    });
  };

  const filteredBooks = useMemo(() => {
    setCurrentPage(1); // Reset to page 1 on any filter change
    return allBooks.filter(book => {
      if (book.price > filters.price[0]) return false;
      if (filters.imprints.length > 0 && !filters.imprints.includes(book.imprint)) return false;
      if (filters.series.length > 0 && !filters.series.includes(book.series)) return false;
      if (filters.formats.length > 0 && !filters.formats.includes(book.format)) return false;
      if (filters.categories.length > 0 && !filters.categories.includes(book.category)) return false;
      if (filters.ages.length > 0 && !filters.ages.includes(book.age)) return false;
      return true;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // --- Filter Sidebar Component ---
  const FilterSidebar = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold uppercase">Filters</h3>
        <Button variant="link" onClick={() => setFilters(initialFilters)}>Reset</Button>
      </div>
      <Accordion type="multiple" defaultValue={["price", "imprints", "categories"]} className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger><span className="uppercase">Price Range</span></AccordionTrigger>
          <AccordionContent className="p-2">
            <Label>Max Price: ${filters.price[0]}</Label>
            <Slider
              defaultValue={[50]}
              max={50}
              step={1}
              value={filters.price}
              onValueChange={(value) => setFilters(prev => ({ ...prev, price: value }))}
            />
          </AccordionContent>
        </AccordionItem>
        {/* Render other checkbox filters dynamically */}
        {Object.entries({
          imprints: filterOptions.imprints,
          series: filterOptions.series,
          formats: filterOptions.formats,
          categories: filterOptions.categories,
          ages: filterOptions.ages,
        }).map(([key, options]) => (
          <AccordionItem key={key} value={key}>
            <AccordionTrigger><span className="uppercase">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span></AccordionTrigger>
            <AccordionContent className="space-y-2">
              {options.map(option => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${key}-${option}`}
                    checked={(filters[key as keyof typeof filters] as string[]).includes(option)}
                    onCheckedChange={() => handleCheckboxChange(key as keyof typeof filters, option)}
                  />
                  <Label htmlFor={`${key}-${option}`} className="font-normal">{option}</Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  // Main return for BooksPage
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:underline">Home</a>
              <span className="mx-2">&gt;</span>
            </li>
            <li className="flex items-center text-gray-700 font-medium">Books</li>
          </ol>
        </nav>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">Books</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Mobile Filter Controls --- */}
          <div className="lg:hidden">
            <Button
              onClick={() => setIsMobileFilterVisible(!isMobileFilterVisible)}
              className="w-full flex items-center gap-2"
            >
              {isMobileFilterVisible ? <X size={18} /> : <Filter size={18} />}
              {isMobileFilterVisible ? "Hide Filters" : "Show Filters"}
            </Button>
            <AnimatePresence>
              {isMobileFilterVisible && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="p-6 bg-white border">
                    <FilterSidebar />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- Desktop Filter Sidebar --- */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="p-6 bg-white border sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* --- Main Content: Books Grid and Pagination --- */}
          <main className="lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedBooks.map(book => (
                <div key={book.id} className="bg-white border shadow-sm overflow-hidden group">
                  <div className="relative w-full aspect-[2/3]">
                    <Image src="/DeadEnd.jpg" alt={book.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold truncate">{book.title}</h3>
                    <p className="text-sm text-gray-500">{book.author}</p>
                    <p className="font-semibold mt-2 text-rose-600">${book.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* --- Pagination --- */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Previous</Button>
                <span className="text-sm font-medium">Page {currentPage} of {totalPages}</span>
                <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Next</Button>
              </div>
            )}
            
            {filteredBooks.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-lg text-gray-500">No books match the current filters.</p>
                </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}