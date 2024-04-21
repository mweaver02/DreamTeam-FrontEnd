using System.Data;
using System.Data.OleDb;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace BlazorApp1.Components.Pages
{
    public class Sport
    {

        public OleDbConnection Connection;
        public string Table;
        public string Column;
        string query;

        public Sport(string connectionString, string defaultTable) 
        { 
            Connection = new OleDbConnection(connectionString);
            Connection.Open();
            Table = defaultTable;
        }

        public DataTable Search(string column, string text)
        {
            if (column == "")
            {
                query = $"SELECT * FROM {Table}";
            }
            else
            {
                query = $"SELECT * FROM {Table} WHERE [{column}] LIKE @search"; //Put columns in brackets or sql gets angry
            }
            OleDbCommand command = new OleDbCommand(query, Connection);
            OleDbDataAdapter adapter = new OleDbDataAdapter(command);
            adapter.SelectCommand.Parameters.Clear();
            adapter.SelectCommand.Parameters.AddWithValue("@search", $"{text}%");
            DataTable dataTable = new DataTable();
            adapter.Fill(dataTable);
            return dataTable;
        }

    }
}
