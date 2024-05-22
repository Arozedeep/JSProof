/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFTs =[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_id ,_name, _rarity, _colour, _creationYear) {
  const NFT = {
    "Id" : _id,
    "Name" : _name,
    "Rarity" : _rarity,
    "Colour" : _colour,
    "Creation Year" : _creationYear
  };

  NFTs.push(NFT);
  console.log("Minted : " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  let i=0;
  while(i<NFTs.length)
  {
    console.log("\nThe metadata of NFT with Id :"+ NFTs[i].Id)
    console.log("Name :" + NFTs[i].Name);
    console.log("Rarity :" + NFTs[i].Rarity);
    console.log("Colour :" + NFTs[i].Colour);
    console.log("Creation Year :" + NFTs[i]["Creation Year"]);
    i++;
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  let nfts_lenth = NFTs.length;
  console.log("\nNo. of NFTs Minted are : " + nfts_lenth);
}

// call your functions below this line

mintNFT("1", "Quantum", "Legendary", "Blue", "2021");
mintNFT("2", "Cell", "Uncommon", "Green", "2019");
mintNFT("3", "Hit", "Common", "Red", "2024");
mintNFT("4", "Earth", "Legendary", "White", "2018");

listNFTs();
getTotalSupply();

