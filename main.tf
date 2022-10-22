terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  credentials = file(".credentials/credential.json")

  project = "geometricpanda"
  region  = "europe-west2"
  zone    = "europe-west2-a"
}

resource "google_storage_bucket" "release" {
  name          = "raidathon-angular-universal"
  location      = "EU"
  force_destroy = true
}

resource "google_storage_bucket_object" "release" {
  name   = "release.zip"
  bucket = "raidathon-angular-universal"
  source = "./release.zip"
}

