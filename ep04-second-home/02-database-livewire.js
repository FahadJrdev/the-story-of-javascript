// LiveWire Pro (1996): JavaScript talking to a database, on the server
if (!database.connected())
    database.connect("INFORMIX", "yourserver", "informix", "informix", "livewire")

custs = database.cursor("SELECT ID, NAME, CITY FROM CUSTOMER ORDER BY ID")
