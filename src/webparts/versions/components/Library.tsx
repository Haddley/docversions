import { WebPartContext } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import { useEffect } from 'react';
import spservices from '../../services/sp-services';

export interface ILibraryProps {
    context: WebPartContext;
}

const Library: React.FunctionComponent<ILibraryProps> = ({ context }) => {

    const [busy, setBusy] = React.useState(true);
    const [documents, setDocuments] = React.useState([]);

    useEffect(() => {
        (async () => {
          await refreshEvents();
        })();
      }, []);
  
      const refreshEvents = async () => {
        try {
          setBusy(() => true);
          const spService = new spservices(context);
          const calendarEvents = await spService.getDocuments();
          setDocuments(() => calendarEvents);
          setBusy(() => false);
        }
        catch (error) {
          setBusy(() => false);
        }
      };

      

    return (
        <>
            {(busy) ? <div>Busy</div> : <div>Not busy</div>}

            {(documents) ? (documents.map((doc, index) => ( <div key={index}>{doc}</div> ))) : 'undefined'}
            
            <h1>Hi There {context.pageContext.user.displayName}</h1>
        </>
    );
};

export default Library;
