export function SocialButton({
    label,
    link,
    children,
}: {
    label: string;
    link: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={link}
            className="
        w-14
        p-2
        bg-background
        rounded-2xl
        cursor-pointer
        group justify-center dark:bg-background-dark hover:bg-primary hover:text-white dark:hover:bg-primary-dark transition duration-300
      "
        >
            <span
                className="
          sr-only
        "
            >
                {label}
            </span>
            {children}
        </a>
    );
}
