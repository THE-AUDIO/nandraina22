/** Join de classes CSS en filtrant les valeurs falsy. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
