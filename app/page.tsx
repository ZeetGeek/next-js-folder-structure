import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Page() {
    // eslint-disable-next-line no-console
    console.log("test");

    return (
        <div className="bg-neutral-900 font-bold shadow-sm shrink text-red-500">
            <Button className={cn(`rounded-sm underline`)}></Button>
        </div>
    );
}

export default Page;
