import { WebPartContext } from "@microsoft/sp-webpart-base";
import {
    SPHttpClient,
    SPHttpClientResponse
  } from '@microsoft/sp-http';

// import * as moment from 'moment';

export default class spservices {

    private webPartContext:WebPartContext;

    constructor(private context: WebPartContext) {
        /*sp.setup({
            spfxContext: this.context
        });*/
        this.webPartContext = context;
    }

    public async getDocuments(): Promise<any[]> {
        try {


            // var response = await this.webPartContext.spHttpClient.get("/_api/web/lists/getbytitle('Documents')/items(1)?$select=Title,Editor/Title&$expand=Editor/Id", SPHttpClient.configurations.v1);
            // var response = await this.webPartContext.spHttpClient.get("/_api/web/lists/getbytitle('Documents')/items?$select=Title,Editor/Title&$expand=Editor/Id", SPHttpClient.configurations.v1);
            
            
            // var response = await this.webPartContext.spHttpClient.get("/_api/web/lists/getbytitle('Documents')/items", SPHttpClient.configurations.v1);
            
            // var response = await this.webPartContext.spHttpClient.get("https://p8lf.sharepoint.com/sites/Mark8ProjectTeam/_api/web/GetFolderByServerRelativeUrl('/sites/Mark8ProjectTeam/Shared%20Documents/')/Files", SPHttpClient.configurations.v1);

            var response = await this.webPartContext.spHttpClient.get("https://p8lf.sharepoint.com/sites/Mark8ProjectTeam/_api/web/GetFolderByServerRelativeUrl('/sites/Mark8ProjectTeam/Shared%20Documents/Design')/Files", SPHttpClient.configurations.v1);

            var response = await this.webPartContext.spHttpClient.get("/sites/Mark8ProjectTeam/_api/web/GetFolderByServerRelativeUrl('/sites/Mark8ProjectTeam/Shared%20Documents/Design')/Files", SPHttpClient.configurations.v1);
            var responseJSON = await response.json();

            console.log("responseJSON",responseJSON);

            return responseJSON.value.map((item: any) => item.Name);

            // return response.json();




            // /_api/web/lists/getbytitle('Documents')/items(1)?$select=Title,InternalName,Editor/Title&$expand=Editor/Id


            console.log("getDocuments");
            /*const items: any[] = await sp.web.lists.getByTitle("Shared Documents").items.get();

            

            // const items: any[] = await sp.web.lists.getByTitle("Shared Documents").items.get();

            console.log("items", items);

            const promises = items.map(doc =>
                (async (item) => {

                    return ({
                        id: item.Id,
                        title: item.Title,
                        url: item.File.ServerRelativeUrl,
                    });

                })(doc));

            return await (Promise.all(promises));*/

        } catch (error) {
            return Promise.reject(error);
        }
    }



}