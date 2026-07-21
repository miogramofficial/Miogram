import {
  Button,
  Input,
  Badge,
  Card,
  Avatar,
  IconButton,
} from "@/components/ui";

export default function UIPage() {
    return (
        <main className="min-h-screen p-8 bg-gray-100">
            <div className="mb-12">
                <h1 className="text-4xl font-bold">
                    Miogram Design System
                </h1>

                <p className="text-gray-600 mt-2">
                    Internal component library for Miogram.
                </p>
            </div>

            <h2 className="text-xl font-semibold mb-4">
                Buttons
            </h2>
            <div className="flex flex-col gap-4 max-w-sm">
                <Button>Primary Button</Button>

                <Button variant="secondary">
                    Secondary Button
                </Button>

                <Button variant="outline">
                    Outline Button
                </Button>

                <Button variant="ghost">
                    Ghost Button
                </Button>

                <Button variant="danger">
                    Danger Button
                </Button>

                <Button loading>
                    Loading Button
                </Button>

                <Button fullWidth>
                    Full Width Button
                </Button>
            </div>


            <div className="mt-12 max-w-sm">
                <h2 className="text-xl font-semibold mb-4">
                    Inputs
                </h2>

                <div className="flex flex-col gap-4">

                    <div className="h-12 border rounded-xl flex items-center px-4">
                        Test Input
                    </div>

                    <div className="h-12 border rounded-xl flex items-center px-4">
                        Test Input 1
                    </div>

                    <div className="h-12 border rounded-xl flex items-center px-4">
                        Test Input 2
                    </div>
                </div>
            </div>


        </main>
    );
}