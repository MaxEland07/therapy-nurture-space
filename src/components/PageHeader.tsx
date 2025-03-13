import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  pageName: string;
}

const PageHeader = ({ title, description, pageName }: PageHeaderProps) => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-5">
          <p className="inline-block py-1 px-3 bg-therapy-blue/20 text-primary rounded-full font-medium mb-4 text-sm">
            {pageName}
          </p>
          
          <h1 className="text-3xl md:text-5xl font-serif mb-6 text-slate-800">
            {title}
          </h1>
          
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader; 