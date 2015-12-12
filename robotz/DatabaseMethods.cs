using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace robotz
{
    public static class DatabaseMethods
    {

        public static void PostData()
        {

           
                //string usrnm = Session["username"].ToString();
                //string pw = Session["password"].ToString();
                //int tempuid = Common.GetUserID(usrnm);
                //string tempfn = Common.GetUserFirstName(usrnm);
                //string templn = Common.GetUserLastName(usrnm);
                //ConnectionStringSettings connectionStringSettings = ConfigurationManager.ConnectionStrings["ukfdatabaseConnectionString"];
                //string connectionString = connectionStringSettings.ConnectionString;
                //SqlDataSource sds = new SqlDataSource();

                //string addressinfoinsert = "INSERT INTO AddressInfo (UserID, " + ReturnInsertNamesSQLString("AddressInfo") + ") VALUES (" + tempuid + ", " + ReturnInsertValuesSQLString("AddressInfo") + ") GO SELECT @@IDENTITY AS 'Identity' GO";
                //string phoneinfoinsert = "INSERT INTO PhoneInfo (UserID, " + ReturnInsertNamesSQLString("PhoneInfo") + ") VALUES (" + tempuid + ", " + ReturnInsertValuesSQLString("PhoneInfo") + ") GO SELECT @@IDENTITY AS 'Identity' GO";
                //string gauzeinfoinsert = "INSERT INTO GauzeEntries (UserID, " + ReturnInsertNamesSQLString("GauzeEntries") + ") VALUES (" + tempuid + ", " + ReturnInsertValuesSQLString("GauzeEntries") + ") GO SELECT @@IDENTITY AS 'Identity' GO";
                //string syringeinfoinsert = "INSERT INTO SyringeEntries (UserID, " + ReturnInsertNamesSQLString("SynringeEntries") + ") VALUES (" + tempuid + ", " + ReturnInsertValuesSQLString("SyringeEntries") + ") GO SELECT @@IDENTITY AS 'Identity' GO";

                //string addressinfoupdate = "UPDATE [dbo].[AddressInfo] SET " + ReturnUpdateSQLString("AdressInfo") + " WHERE UserID = " + tempuid.ToString();
                //string phoneinfoupdate = "UPDATE [dbo].[PhoneInfo] SET " + ReturnUpdateSQLString("PhoneInfo") + " WHERE UserID = " + tempuid.ToString();
                //string gauzeinfoupdate = "UPDATE [dbo].[GauzeEntries] SET " + ReturnUpdateSQLString("GauzeEntries") + " WHERE UserID = " + tempuid.ToString();
                //string syringeinfoupdate = "UPDATE [dbo].[SyringeEntries] SET " + ReturnUpdateSQLString("SyringeEntries") + " WHERE UserID = " + tempuid.ToString();

                //SqlConnection sconn = new SqlConnection(connectionString);
                //SqlCommand scom = null;

                //bool addressentryexists = Common.EntriesExist("AddressInfo", "where UserID = " + tempuid);
                //bool phoneentryexists = Common.EntriesExist("PhoneInfo", "where UserID = " + tempuid);
                //bool gauzeentryexists = Common.EntriesExist("GauzeEntries", "where UserID = " + tempuid);
                //bool syringeentryexists = Common.EntriesExist("SyringeEntries", "where UserID = " + tempuid);

                //if (!addressentryexists)
                //{
                //    sds.InsertCommand = addressinfoinsert;
                //    scom = new SqlCommand(sds.InsertCommand, sconn);
                //}
                //else
                //{
                //    sds.UpdateCommand = addressinfoupdate;
                //    scom = new SqlCommand(sds.UpdateCommand, sconn);
                //}

                //if (!phoneentryexists)
                //{
                //    sds.InsertCommand = phoneinfoinsert;
                //    scom = new SqlCommand(sds.InsertCommand, sconn);
                //}
                //else
                //{
                //    sds.UpdateCommand = phoneinfoupdate;
                //    scom = new SqlCommand(sds.UpdateCommand, sconn);
                //}

                //if (!gauzeentryexists)
                //{
                //    sds.InsertCommand = gauzeinfoinsert;
                //    scom = new SqlCommand(sds.InsertCommand, sconn);
                //}
                //else
                //{
                //    sds.UpdateCommand = gauzeinfoupdate;
                //    scom = new SqlCommand(sds.UpdateCommand, sconn);
                //}

                //if (!syringeentryexists)
                //{
                //    sds.InsertCommand = syringeinfoinsert;
                //    scom = new SqlCommand(sds.InsertCommand, sconn);
                //}
                //else
                //{
                //    sds.UpdateCommand = syringeinfoupdate;
                //    scom = new SqlCommand(sds.UpdateCommand, sconn);
                //}

                //sconn.Open();
                //int id = scom.ExecuteNonQuery();
           
        }      
    }
}