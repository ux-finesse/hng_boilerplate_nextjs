import React from "react";

interface Props {
  tag: string;
  title: string;
  content: string;
}

const Heading = (props:Props) => {
  const renderTitle = (title: string) => {
    const parts = title.split(/({{[^}]+}})/).filter(Boolean);

    return parts.map((part, index) => {
      if (part.startsWith("{{") && part.endsWith("}}")) {
        const styledText = part.slice(2, -2);
        return (
          <span key={index} className="text-orange-500">
            {styledText}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div
      className="text-center md:mx-auto"
      data-testid="pricing-header"
    >
      <p
        className="mb-6 inline-block rounded-md bg-gray-200 px-4 py-1 text-sm text-black md:text-lg"
        data-testid="pricing-tag"
      >
        {props?.tag}
      </p>

      <h2
        className="font-inter mb-6 text-center text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl"
        data-testid="pricing-title"
      >
        {renderTitle(props.title)}
      </h2>
      <p
        className="md-text-xl mb-10 text-base text-lg text-gray-700"
        data-testid="pricing-description"
      >
        {props?.content}
      </p>
    </div>
  );
};

export default Heading;
