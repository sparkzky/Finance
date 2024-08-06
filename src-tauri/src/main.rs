// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::Serialize;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, fuck, get_users, get_posts])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn fuck(name: &str) -> String {
    format!(
        "You know what, fuck you, fuck you, and especially fuck you, {}!",
        name
    )
}

#[derive(Serialize)]
struct User {
    id: u32,
    name: String,
}

#[derive(Serialize)]
struct Post {
    id: u32,
    title: String,
    body: String,
}

#[tauri::command]
async fn get_users() -> Vec<User> {
    // 假设这里从数据库或其他数据源获取用户数据
    vec![
        User {
            id: 1,
            name: "Alice".to_string(),
        },
        User {
            id: 2,
            name: "Bob".to_string(),
        },
        User {
            id: 3,
            name: "Charlie".to_string(),
        },
    ]
}

#[tauri::command]
async fn get_posts() -> Vec<Post> {
    // 假设这里从数据库或其他数据源获取帖子数据
    vec![
        Post {
            id: 1,
            title: "Post 1".to_string(),
            body: "Body of post 1".to_string(),
        },
        Post {
            id: 2,
            title: "Post 2".to_string(),
            body: "Body of post 2".to_string(),
        },
    ]
}
