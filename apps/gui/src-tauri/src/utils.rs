use regex::Regex;
use std::io::{BufRead, Read};

pub fn get_game_version(path: String) -> String {    
    let mut file = std::fs::File::open(format!("{}\\Beat Saber_Data\\globalgamemanagers", path)).unwrap();
    let mut bytes = Vec::new();
    file.read_to_end(&mut bytes).unwrap();

    let out = String::from_utf8_lossy(&*bytes);
    let pos = out.find("public.app-category.games").unwrap();
    let regex = Regex::new(r"[\d]+.[\d]+.[\d]+(p1)?").unwrap();

    let ver = &out[pos..];
    let ver = regex.find(ver).unwrap().as_str();
    ver.to_string()
}
