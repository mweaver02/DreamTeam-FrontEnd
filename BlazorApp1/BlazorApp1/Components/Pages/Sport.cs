using System.Data;
using System.Data.OleDb;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace BlazorApp1.Components.Pages
{
    public class Sport
    {
        //Properties
        public OleDbConnection Connection { get; set; }
        public string Table {  get; set; }
        public string Column { get; set; } //Right now, I think its better to pass the column as a parameter, but maybe we can use it in the future.
        string Query { get; set; }

        //Object
        public Sport(string connectionString, string defaultTable)
        { 
            Connection = new OleDbConnection(connectionString);
            Connection.Open();
            Table = defaultTable;
        }

        //Method
        public DataTable Search(string column, string text) 
        {
            if (column == "")
            {
                Query = $"SELECT * FROM {Table}"; //If columns is blank it will select all
            }
            else
            {
                Query = $"SELECT * FROM {Table} WHERE [{column}] LIKE @search"; //Put columns in brackets or sql gets angry
            }
            OleDbCommand command = new OleDbCommand(Query, Connection);
            OleDbDataAdapter adapter = new OleDbDataAdapter(command);
            adapter.SelectCommand.Parameters.Clear();
            adapter.SelectCommand.Parameters.AddWithValue("@search", $"{text}%");
            DataTable dataTable = new DataTable();
            adapter.Fill(dataTable);
            return dataTable;
        }

    }
}
