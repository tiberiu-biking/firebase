package com.tpo.firebase.database.read;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.IOException;

/**
 * @author Tiberiu
 * @since 2020-03-21
 */
public class Main {

    public static void main(String[] args) throws IOException {
        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.getApplicationDefault())
                .setDatabaseUrl("https://fit-me-568f5.firebaseio.com")
                .build();

        FirebaseApp.initializeApp(options);
    }
}
