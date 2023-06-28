const fs = require('fs');

const csvFilePath = './csv/data.csv';

const jsonData: CsvData[] = [];

interface CsvData {
    ID: string;
    Type: string;
    SKU: string;
    Name: string;
    Published: string;
    Is_featured: string;
    Visibility_in_catalog: string;
    Short_description: string;
    Description: string;
    Date_sale_price_starts: string;
    Date_sale_price_ends: string;
    Tax_status: string;
    Tax_class: string;
    In_stock: string;
    Stock: string;
    Low_stock_amount: string;
    Backorders_allowed: string;
    Sold_individually: string;
    Weight_kg: string;
    Length_cm: string;
    Width_cm: string;
    Height_cm: string;
    Allow_customer_reviews: string;
    Purchase_note: string;
    Sale_price: string;
    Regular_price: string;
    Categories: string;
    Tags: string;
    Shipping_class: string;
    Images: string;
    Download_limit: string;
    Download_expiry_days: string;
    Parent: string;
    Grouped_products: string;
    Upsells: string;
    Cross_sells: string;
    External_URL: string;
    Button_text: string;
    Position: string;
    Attribute_1_name: string;
    Attribute_1_values: string;
    Attribute_1_visible: string;
    Attribute_1_global: string;
    Attribute_2_name: string;
    Attribute_2_values: string;
    Attribute_2_visible: string;
    Attribute_2_global: string;
  }


fs.readFile(csvFilePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n');
  const headers = lines[0].split(';');

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(';');
    const obj: CsvData = {} as CsvData;

    for (let j = 0; j < headers.length; j++) {
      const header = headers[j].trim();
      const value = values[j].trim();

      let transformedHeader = header.replace(/\s/g, '_');
      transformedHeader = transformedHeader.replace(/[^\w\s]/gi, ''); 

      obj[transformedHeader as keyof CsvData] = value;
    }

    jsonData.push(obj);
  }

  console.log(jsonData);
});
