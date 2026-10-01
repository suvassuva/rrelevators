import Link from 'next/link';
import type { NavLink } from '@/types';


interface MegaMenuProps {
  item: NavLink;
}

export function MegaMenu({ item }: MegaMenuProps) {
  if (!item.children) return null;

  return (
    <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]">
      <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden p-6">
        <div className="grid grid-cols-2 gap-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="flex flex-col gap-1 p-3 rounded-xl hover:bg-light transition-colors group"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                {child.label}
              </span>
              {child.description && (
                <span className="text-xs text-muted leading-relaxed">
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <Link
            href={item.href}
            className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
          >
            View All {item.label} →
          </Link>
        </div>
      </div>
    </div>
  );
}
