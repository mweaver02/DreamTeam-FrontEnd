using System.Data;
using System.Data.OleDb;

namespace BlazorApp1.Components.Pages
{
    public class QueryClass
    {
        private DataTable dataTable;


        public DataTable Search(string connectionString, string table)
        {
            OleDbConnection connection = new OleDbConnection(connectionString);
            connection.Open();
            OleDbCommand command = new OleDbCommand($"SELECT * FROM {table}", connection);
            OleDbDataAdapter adapter = new OleDbDataAdapter(command);
            dataTable = new DataTable();
            adapter.Fill(dataTable);
            return dataTable;
        }


        public DataTable SearchEPIC(string connectionString, string table, string column, string text)
        {
            OleDbConnection connection = new OleDbConnection(connectionString);
            connection.Open();
            OleDbCommand command = new OleDbCommand($"SELECT * FROM {table} WHERE {column} LIKE @search", connection);
            OleDbDataAdapter adapter = new OleDbDataAdapter(command);
            adapter.SelectCommand.Parameters.Clear();
            adapter.SelectCommand.Parameters.AddWithValue("@search", $"{text}%");
            dataTable = new DataTable();
            adapter.Fill(dataTable);
            return dataTable;

        }

    }
}
