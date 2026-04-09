import { Container } from "react-bootstrap";
import { magicitemsRetrieve } from "../../modules/open5e/sdk.gen";
import { MagicitemsRetrieveResponse } from "../../modules/open5e/types.gen";
import { useState, useEffect } from "react";

// { "slug": string,
//   "name": string,
//   "type": string,
//   "desc": string
//   "rarity": string,
//   "requires_attunement": string,
//   "document__slug": string,
//   "document__title": string,
//   "document__url": string
// }

export default function magicItem({ id }: { id: string }) {
  const [magicItem, setmagicItem] = useState<MagicitemsRetrieveResponse | null>(
    null,
  );

  useEffect(() => {
    async function load() {
      const res = await magicitemsRetrieve({
        path: {
          key: id,
        },
      });
      console.log(res.response);
      setmagicItem(res.data as MagicitemsRetrieveResponse);
    }
    load();
  }, []);

  if (!magicItem) {
    return (
      <div>
        <p>...loading</p>
      </div>
    );
  } else {
    return (
      <Container fluid className="phb page">
        <main className="">
          <h1>Magic Item</h1>
          <div className="columnWrapper">
            <h2 id="magicItem">{magicItem.name}</h2>
            <p className="wide">
              <em>
                {magicItem.rarity.name} {magicItem.category.name}
              </em>
            </p>
          </div>
          <a className="artist" href={magicItem.document.permalink}>
            {magicItem.document.publisher.name}
          </a>
          <div className="footnote">
            <p className="">{magicItem.document.name}</p>
          </div>
          <div className="pageNumber auto"></div>
        </main>
      </Container>
    );
  }
}
