#resource "google_storage_bucket" "release" {
#  name          = "raidathon-angular-universal"
#  location      = "EU"
#  force_destroy = true
#}

resource "google_storage_bucket_object" "release" {
  name   = "release.zip"
  bucket = "raidathon-angular-universal"
  source = "./release.zip"
}

resource "google_cloudfunctions_function" "function" {
  name        = "raidathon-angular-universal"
  description = "Angular Universal Cloud Function"
  runtime     = "nodejs16"

  available_memory_mb   = 1024
  source_archive_bucket = "raidathon-angular-universal"
  source_archive_object = "release.zip"
  trigger_http          = true
  entry_point           = "app"
}
# IAM entry for all users to invoke the function
resource "google_cloudfunctions_function_iam_member" "invoker" {
  project        = "geometricpanda"
  region         = "europe-west2"
  cloud_function = "raidathon-angular-universal"

  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"
}
