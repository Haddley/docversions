import * as React from 'react';
import styles from './Versions.module.scss';
import { IVersionsProps } from './IVersionsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import spservices from '../../services/sp-services';
import Library from './Library';

export default class Versions extends React.Component<IVersionsProps, {}> {
  public render(): React.ReactElement<IVersionsProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
      context
    } = this.props;

    // const [busy, setBusy] = React.useState(true);
    // const [documents, setDocuments] = React.useState([1, 2, 3]);

    /*React.useEffect(() => {
      (async () => {
        await refreshDocuments()
      })();
    }, [])*/

    /*const refreshDocuments = async () => {

      console.log("refreshEvents");

      try {
        setBusy(() => true);
        const spService = new spservices(context);
        const docs = await spService.getDocuments();
        setDocuments(() => docs);
        setBusy(() => false);
      }
      catch (error) {
        setBusy(() => false);
      }
    };*/


    return (
      <section className={`${styles.versions} ${hasTeamsContext ? styles.teams : ''}`}>

        <Library context={context}></Library>

      </section>
    );
  }
}
