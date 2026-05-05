import { Tag } from "lucide-react";
import { useMemo } from "react";

interface BlogMainContentProps {
    content: string;
    tags: string[];
}

const BlogMainContent = ({ content, tags }: BlogMainContentProps) => {
    const contentWithIds = useMemo(() => {
        let processedContent = content;

        let paragraphCount = 0;
        processedContent = processedContent.replace(/<p\b[^>]*>(.*?)<\/p>/i, (match, text) => {
            paragraphCount++;
            if (paragraphCount === 1) {
                return `<div id="quick-summary" class="mb-10 p-8 bg-zinc-50 rounded-[2rem] border-l-4 border-primary">
                    <p class="text-xl font-medium leading-relaxed italic text-foreground opacity-90">${text}</p>
                </div>`;
            }
            return match;
        });

        const seenIds = new Set<string>();
        return processedContent.replace(
            /<h([23456])\b[^>]*>(.*?)<\/h\1>/gi,
            (match, level, text) => {
                const plainText = text.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase().trim();
                let id = plainText.replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                if (!id) id = `section-${level}`;
                let uniqueId = id;
                let counter = 1;
                while (seenIds.has(uniqueId)) {
                    uniqueId = `${id}-${counter}`;
                    counter++;
                }
                seenIds.add(uniqueId);
                return `<h${level} id="${uniqueId}">${text}</h${level}>`;
            }
        );
    }, [content]);

    return (
        <div className="flex-1 max-w-3xl">
            <div
                className="max-w-none 
                    [&>*:first-child]:mt-0
                    [&_h2]:text-foreground [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:text-[28px] [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:leading-tight [&_h2]:uppercase [&_h2]:scroll-mt-[120px] max-[426px]:[&_h2]:text-[22px]
                    [&_h3]:text-foreground [&_h3]:font-black [&_h3]:tracking-tight [&_h3]:text-[22px] [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:leading-tight [&_h3]:uppercase [&_h3]:scroll-mt-[120px] max-[426px]:[&_h3]:text-[19px]
                    [&_h4]:text-foreground [&_h4]:font-black [&_h4]:tracking-tight [&_h4]:text-[18px] [&_h4]:mt-10 [&_h4]:mb-3 [&_h4]:leading-tight [&_h4]:uppercase [&_h4]:scroll-mt-[120px] [&_h4]:text-primary
                    [&_h5]:text-foreground [&_h5]:font-black [&_h5]:tracking-tight [&_h5]:text-[16px] [&_h5]:mt-8 [&_h5]:mb-2 [&_h5]:leading-tight [&_h5]:uppercase [&_h5]:scroll-mt-[120px]
                    [&_p]:text-muted-foreground [&_p]:leading-[1.8] [&_p]:mb-8 [&_p]:mt-0 [&_p]:text-[18px] max-[426px]:[&_p]:text-[16px] max-[426px]:[&_p]:mb-6
                    [&_strong]:text-foreground [&_strong]:font-bold
                    [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-primary/5 [&_blockquote]:py-10 [&_blockquote]:px-12 [&_blockquote]:rounded-r-[2.5rem] [&_blockquote]:not-italic [&_blockquote]:my-16 [&_blockquote]:text-2xl [&_blockquote]:font-medium [&_blockquote]:text-foreground/90 max-[426px]:[&_blockquote]:px-6 max-[426px]:[&_blockquote]:my-10 max-[426px]:[&_blockquote]:text-lg
                    [&_li]:text-muted-foreground [&_li]:mb-4 [&_li]:text-[17px] [&_li]:leading-relaxed
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-10 [&_ul]:marker:text-primary
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-10 [&_ol]:marker:text-primary
                    [&_img]:rounded-[2.5rem] [&_img]:my-16 [&_img]:w-full [&_img]:h-[450px] [&_img]:object-cover hover:[&_img]:scale-[1.01] [&_img]:transition-transform [&_img]:duration-700 [&_img]:shadow-2xl [&_img]:shadow-black/5 max-[426px]:[&_img]:h-[280px]
                    [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-bold hover:[&_a]:opacity-80"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* Tags Section */}
            <div className="mt-20 pt-10 border-t border-zinc-100">
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-zinc-50 text-muted-foreground text-sm font-bold hover:bg-primary/5 hover:text-primary transition-all cursor-default border border-transparent hover:border-primary/10"
                        >
                            <Tag size={14} className="text-primary/40" />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogMainContent;
