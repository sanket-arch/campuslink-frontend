import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { constants } from "@/lib/constants";
import { Eye, MessageCircle, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function QueryListContainer() {
  const { queries } = useSelector((state) => state.query);
  useEffect(() => {
    console.log("Queries fetched:", queries);
  }, []);

  const getQueryCards = () => {
    return (
      <div href="/query" className="flex flex-col space-y-4 z-0">
        {queries.map((query) => (
          <Card
            key={query.id}
            className={`bg-white shadow-md ${
              query.queryStatus === "ACTIVE"
                ? "border-green-500"
                : "border-red-500"
            }`}
          >
            <CardHeader className="text-lg flex justify-between items-center">
              <p className="font-semibold">{query.queryTitle}</p>
              <Badge
                variant={constants.QUERY_TYPES[query.queryType].badgeVariant}
                className="bg-chart-3 text-white"
              >
                {query.queryType}
              </Badge>
            </CardHeader>
            <CardContent>
              <p>{query.queryDescription}</p>
              <div className="flex justify-end  mt-2 space-x-2 z-10">
                <Link
                  href={`/query/${query.id}`}
                  className="bg-sidebar-accent-foreground cursor-pointer flex items-center space-x-2 text-white rounded-md px-3  gap-3"
                >
                  <Eye />
                  View Query
                </Link>
                <Button className="bg-sidebar-accent-foreground cursor-pointer rounded-md px-3" type="button">
                  <MessageSquareQuote />
                  Responses
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full pt-4 overflow-auto">
      <Card>
        <CardHeader className="text-xl font-semibold">Query List</CardHeader>
        <CardContent>
          {queries.length === 0 ? (
            <p>No queries available.</p>
          ) : (
            getQueryCards()
          )}
        </CardContent>
      </Card>
    </div>
  );
}
