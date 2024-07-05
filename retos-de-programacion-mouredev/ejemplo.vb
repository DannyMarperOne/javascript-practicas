Private Sub Worksheet_Change(ByVal Target As Range)
    ' Llamar a la función para enviar datos a SQL Server
    Call SendToSQLServer(Target)
End Sub

Private Sub SendToSQLServer(ByVal Target As Range)
    Dim conn As Object
    Dim cmd As Object
    Dim lastRow As Long
    Dim i As Long
    Dim ws As Worksheet

    ' Asegúrate de que la hoja de trabajo existe
    On Error Resume Next
    Set ws = ThisWorkbook.Sheets("Consulta1")
    On Error GoTo 0

    If ws Is Nothing Then
        MsgBox "La hoja 'Consulta1' no existe.", vbCritical
        Exit Sub
    End If

    ' Configurar la conexión a SQL Server
    Set conn = CreateObject("ADODB.Connection")
    conn.ConnectionString = "Provider=SQLOLEDB ;Data Source=SERVER-SAP;Initial Catalog=spi;User ID=sa;Password=SAPB1Admin;"
    conn.Open

    ' Recorrer cada celda modificada e insertar o actualizar datos en SQL Server
    For Each cell In Target
        If Not Intersect(cell, ws.UsedRange) Is Nothing Then
            ' Obtener los datos de la fila modificada
            i = cell.Row
            Dim value1 As Variant ' Use Variant to handle different data types
            Dim value2 As String
            Dim value3 As Variant ' Use Variant to handle different data types
            Dim value4 As String
            Dim value5 As String
            Dim value6 As Variant ' Use Variant to handle different data types

            value1 = ws.Cells(i, 1).value
            value2 = ws.Cells(i, 2).value
            value3 = ws.Cells(i, 3).value
            value4 = ws.Cells(i, 4).value
            value5 = ws.Cells(i, 5).value
            value6 = ws.Cells(i, 6).value

            ' Reemplazar comillas simples para evitar errores de consulta
            value1 = Replace(value1, "'", "''")
            value2 = Replace(value2, "'", "''")
            value3 = Replace(value3, "'", "''")
            value4 = Replace(value4, "'", "''")
            value5 = Replace(value5, "'", "''")
            value6 = Replace(value6, "'", "''")

            ' Asegúrate de que los valores no estén vacíos o nulos
            If value1 <> "" Then
                ' Verificar si el registro ya existe en la base de datos antes de insertar o actualizar
                If RecordExists(conn, "ExcelData", "Nota", value1) Then
                    ' Actualizar el registro existente
                    Set cmd = CreateObject("ADODB.Command")
                    cmd.ActiveConnection = conn
                    ' Convierte value3 a número entero si es un número válido
                    If IsNumeric(value3) Then
                        cmd.CommandText = "UPDATE ExcelData SET Column2 = '" & value2 & "', Column3 = " & CLng(value3) & " WHERE Column1 = '" & value1 & "'"
                    Else
                        ' Si value3 no es numérico, actualizar solo Column2
                        cmd.CommandText = "UPDATE ExcelData SET Column2 = '" & value2 & "' WHERE Column1 = '" & value1 & "'"
                    End If
                    cmd.Execute
                    Set cmd = Nothing
                Else
                    ' Insertar nuevo registro si no existe en la base de datos
                    If IsNumeric(value3) Then
                        Set cmd = CreateObject("ADODB.Command")
                        cmd.ActiveConnection = conn
                        cmd.CommandText = "INSERT INTO ExcelData (Nota, Proveedor, Precio) VALUES ('" & value1 & "', '" & value2 & "', " & CLng(value3) & ")"
                        cmd.Execute
                        Set cmd = Nothing
                    Else
                        ' Si value3 no es numérico, insertar con Column3 como NULL o un valor por defecto en la base de datos
                        Set cmd = CreateObject("ADODB.Command")
                        cmd.ActiveConnection = conn
                        cmd.CommandText = "INSERT INTO ExcelData (Column1, Column2) VALUES ('" & value1 & "', '" & value2 & "')"
                        cmd.Execute
                        Set cmd = Nothing
                    End If
                End If
            End If
        End If
    Next cell

    ' Cerrar la conexión
    conn.Close
    Set conn = Nothing
End Sub

Private Function RecordExists(conn As Object, tableName As String, columnName As String, value As String) As Boolean
    Dim rs As Object
    Dim sql As String

    sql = "SELECT COUNT(*) As RecCount FROM " & tableName & " WHERE " & columnName & " = '" & value & "'"

    Set rs = CreateObject("ADODB.Recordset")
    rs.Open sql, conn

    If Not rs.EOF And Not rs.BOF Then
        If rs.Fields("RecCount").value > 0 Then
            RecordExists = True
        Else
            RecordExists = False
        End If
    Else
        RecordExists = False
    End If

    rs.Close
    Set rs = Nothing
End Function







++++++++++++++++++++++++++++++++++++++++++++++

Private Sub Worksheet_Change(ByVal Target As Range)
    ' Llamar a la función para enviar datos a SQL Server
    Call SendToSQLServer(Target)
End Sub

Private Sub SendToSQLServer(ByVal Target As Range)
    Dim conn As Object
    Dim cmd As Object
    Dim ws As Worksheet

    ' Asegúrate de que la hoja de trabajo existe
    On Error Resume Next
    Set ws = ThisWorkbook.Sheets("Consulta1")
    On Error GoTo 0

    If ws Is Nothing Then
        MsgBox "La hoja 'Consulta1' no existe.", vbCritical
        Exit Sub
    End If

    ' Configurar la conexión a SQL Server
    Set conn = CreateObject("ADODB.Connection")
    conn.ConnectionString = "Provider=SQLOLEDB;Data Source=SERVER-SAP;Initial Catalog=spi;User ID=sa;Password=SAPB1Admin;"
    conn.Open

    ' Recorrer cada celda modificada e insertar o actualizar datos en SQL Server
    For Each cell In Target
        If Not Intersect(cell, ws.UsedRange) Is Nothing Then
            ' Obtener los datos de la fila modificada
            i = cell.Row
            Dim value1 As Variant ' Use Variant to handle different data types
            Dim value2 As String
            Dim value3 As Variant ' Use Variant to handle different data types
            Dim value4 As String
            Dim value5 As String
            Dim value6 As Variant ' Use Variant to handle different data types

            value1 = ws.Cells(i, 1).Value
            value2 = ws.Cells(i, 2).Value
            value3 = ws.Cells(i, 3).Value
            value4 = ws.Cells(i, 4).Value
            value5 = ws.Cells(i, 5).Value
            value6 = ws.Cells(i, 6).Value

            ' Reemplazar comillas simples para evitar errores de consulta
            value2 = Replace(value2, "'", "''")
            value4 = Replace(value4, "'", "''")
            value5 = Replace(value5, "'", "''")

            ' Asegúrate de que los valores no estén vacíos o nulos y sean numéricos para las columnas específicas
            If IsNumeric(value1) And IsNumeric(value3) And IsNumeric(value6) Then
                value1 = CLng(value1)
                value3 = CLng(value3)
                value6 = CLng(value6)

                ' Verificar si el registro ya existe en la base de datos antes de insertar o actualizar
                If RecordExists(conn, "ExcelData", "Nota", value1) Then
                    ' Actualizar el registro existente
                    Set cmd = CreateObject("ADODB.Command")
                    cmd.ActiveConnection = conn
                    cmd.CommandText = "EXEC UpdateRecord @Nota = " & value1 & ", @Proveedor = '" & value2 & "', @Precio = " & value3 & ", @Column4 = '" & value4 & "', @Column5 = '" & value5 & "', @Column6 = " & value6
                    cmd.Execute
                    Set cmd = Nothing
                Else
                    ' Insertar nuevo registro si no existe en la base de datos
                    Set cmd = CreateObject("ADODB.Command")
                    cmd.ActiveConnection = conn
                    cmd.CommandText = "EXEC InsertRecord @Nota = " & value1 & ", @Proveedor = '" & value2 & "', @Precio = " & value3 & ", @Column4 = '" & value4 & "', @Column5 = '" & value5 & "', @Column6 = " & value6
                    cmd.Execute
                    Set cmd = Nothing
                End If
            Else
                MsgBox "Las columnas Nota, Precio y Column6 deben ser números enteros.", vbCritical
            End If
        End If
    Next cell

    ' Cerrar la conexión
    conn.Close
    Set conn = Nothing
End Sub

Private Function RecordExists(conn As Object, tableName As String, columnName As String, value As Long) As Boolean
    Dim rs As Object
    Dim sql As String

    sql = "SELECT COUNT(*) As RecCount FROM " & tableName & " WHERE " & columnName & " = " & value

    Set rs = CreateObject("ADODB.Recordset")
    rs.Open sql, conn

    If Not rs.EOF And Not rs.BOF Then
        If rs.Fields("RecCount").Value > 0 Then
            RecordExists = True
        Else
            RecordExists = False
        End If
    Else
        RecordExists = False
    End If

    rs.Close
    Set rs = Nothing
End Function