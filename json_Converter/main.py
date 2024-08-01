import csv
import json

def make_json(csvFilePath, jsonFilePath):
    data = {}
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        headers = csvReader.fieldnames
        print("Headers:", headers) 
        for rows in csvReader:
            key = rows[headers[0]]  
            data[key] = rows
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))

csvFilePath = r'croprecomm\Crop_recommendation.csv'
jsonFilePath1 = r'backend/Crop.json'
jsonFilePath2 = r'json_Converter/Crop.json'
make_json(csvFilePath, jsonFilePath1)
make_json(csvFilePath, jsonFilePath2)
