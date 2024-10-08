import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useEffect, useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";

const tableStyles = cva(["backdrop-filter", "backdrop-blur-sm", "p-8"], {
  variants: {
    variant: {
      light: "transition-colors duration-300",
      dark: "border-2 transition-colors duration-300",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
    colorscheme: {
      primary: "text-white",
      secondary: "text-slate-950",
    },
  },
  compoundVariants: [
    {
      variant: "light",
      colorscheme: "primary",
      className: "bg-gray-400 bg-opacity-60",
    },
    {
      variant: "dark",
      colorscheme: "primary",
      className: "text-gray-300 border-neutral-700",
    },
  ],
  defaultVariants: {
    variant: "light",
    size: "sm",
    colorscheme: "primary",
  },
});

type TableProps = ComponentProps<"table"> & VariantProps<typeof tableStyles>;

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  company: string;
}

const Table = forwardRef<HTMLDivElement, TableProps>(
  ({ variant, size, className, ...props }, ref) => {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    return (
      <div className="overflow-x-auto text-white rounded-lg">
        {loading ? (
          <p className="text-center py-4">Loading data...</p>
        ) : data.length > 0 ? (
          <table
            ref={ref}
            className={cn(tableStyles({ variant, size, className }))}
            {...props}
          >
            <thead className="bg-neutral-400">
              <tr className="w-100 border-b-2 border-black">
                <th className="px-4 py-2 text-left border-b">
                  <Text color="white">ID</Text>
                </th>
                <th className="px-4 py-2 text-left border-b">
                  <Text color="white">Name</Text>
                </th>
                <th className="px-4 py-2 text-left border-b">
                  <Text color="white">Company</Text>
                </th>
                <th className="px-4 py-2 text-left border-b">
                  <Text color="white">Username</Text>
                </th>
                <th className="px-4 py-2 text-left border-b">
                  <Text color="white">Email</Text>
                </th>
                <th></th> {/* must be here to fill table */}
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-slate-300 hover:text-black"
                >
                  <td className="px-4 py-2 border-b">{user.id}</td>
                  <td className="px-4 py-2 border-b">{user.name}</td>
                  <td className="px-4 py-2 border-b">{user.company.name}</td>
                  <td className="px-4 py-2 border-b">{user.username}</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                  <td className="px-4 py-2 border-b">
                    <Button variant={"outline"} size={"sm"}>
                      Load
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-4">No data available</p>
        )}
      </div>
    );
  }
);
export default Table;
