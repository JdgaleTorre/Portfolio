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

        <a href={link} className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-primary-50 
        shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-100 
        hover:shadow-[0_2px_5px_rgba(0,0,0,0.08)] dark:bg-primary-800/40 dark:hover:bg-primary-800/60 sm:h-10 sm:w-10"
            title={label}
            target="_blank"
            rel="noopener noreferrer"
            data-astro-cid-zamss57n="">
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100" data-astro-cid-zamss57n="">
                <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-primary-300/40 to-primary-400/10 
                dark:from-primary-700/20 dark:to-primary-800/5" data-astro-cid-zamss57n="">
                </span>
            </span>
            {children}

        </a >
    );
}



{/* <a
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
</a> */}