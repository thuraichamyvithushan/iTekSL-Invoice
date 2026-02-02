
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
    }).format(amount);
}
