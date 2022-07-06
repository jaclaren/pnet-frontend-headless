import { useState, useEffect } from "react";
import axios from "axios";

function Error() {
  return <div className="error">Error</div>;
}

export function withFetchedGameData(WrappedComponent: any, url: string) {
  return (props: any) => {
    const [items, setItems] = useState([]);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
      // @ts-ignore
      axios
        .get(url)
        .then((response: any) => setItems(response.data.body.games))
        .catch((err: any) => setFetchError(true));
    });

    return fetchError ? <Error /> : <WrappedComponent items={items} />;
  };
}
