import { createClient } from "@supabase/supabase-js";
const URL = "https://awxkthtdryqlfjlmqqya.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3eGt0aHRkcnlxbGZqbG1xcXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjM5NTcsImV4cCI6MjAyNzk5OTk1N30.TfGqxqIY1XlpWatsrJo2UkuwbLB8qncbo2i65MZ-f3I";

export const supabase = createClient(URL, API_KEY);
