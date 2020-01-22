//  uploaded the cleaned data files in json and cvs and deleted the old ones
//  
let data;
let guess;

function preload(){
  
  data = loadJSON('zhongkaoVocabCl.json'); 
  table = loadTable('zhongkaoWordscsvClean.csv', 'csv', 'header');
}


function setup() {
  createCanvas(400, 400);
  //console.log(data);
  let vocabData = data.ZhongKaoVocab // need to address the head of the data
  guess = floor(random(vocabData.length));
  console.log("hello")
  console.log(vocabData.length);
  console.log(guess);   // get a random index
  let fullword = vocabData[guess]; // put that into a variable  
  console.log(fullword)
  console.log(fullword.Chinese)
  console.log(fullword.English)
  console.log(fullword.part)
  console.log(table.getRowCount(),table.getColumnCount())
  console.log(table.getString(8,2));
  let eng = table.getColumn('English');
  console.log(eng);
  
  // simple search through the table and search for multiple occurrences
  for (let i =0;i<eng.length;i++){
    if (eng[i]== 'rest'){
     print(table.getString(i,0))
      if(eng[i+1]=='rest'){
        print(table.getString(i+1,0))
      }
    } 
  
  }
  print("finished");
  print(vocabData[9].English, vocabData[9].Chinese)
  
  
  
  // simple search through the json and search for multiple occurrences
  for (let i =0;i<vocabData.length;i++){
    if (vocabData[i].English== 'rest'){
     print(vocabData[i].English,vocabData[i].Chinese)
      if(vocabData[i+1]=='rest'){
        print(vocabData[i+1].Chinese)
      }
    } 
  
  }
}
 