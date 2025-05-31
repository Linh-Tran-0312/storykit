import React, { useState, FC } from 'react';
const visibleAttrs = ['id', 'role'];
export const Inspector: FC<{
  children: React.ReactNode;
  getCode: Function;
  className?: string;
}> = ({ children, getCode, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.dataset.componentId) return;

    const attrs = Array.from(target.attributes)
      .filter(
        (attr) =>
          attr.name.startsWith('aria-') || visibleAttrs.includes(attr.name)
      )
      .map((attr) => `\n ${attr.name}="${attr.value}"`)
      .join(' ');

    const tag = target.tagName.toLowerCase();
    const inner = target.innerHTML.trim();
    const jsx = `<${tag}${attrs}>\n${inner}\n</${tag}>`;

    getCode(jsx);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
